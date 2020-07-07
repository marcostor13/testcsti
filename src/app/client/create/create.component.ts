import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { SAVE } from './../../actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  name: String = ''
  lastname: String = ''
  age: String = ''
  dateofbirth: String = ''
  response: String = ''


  constructor(private api:ApiService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    
  }

  save(){   

    let data = {
      data:{
        name: this.name,
        lastname: this.lastname,
        age: this.age,
        dateofbirth: this.dateofbirth
      },
      collection: 'clients'
    }

    this.api.addDocument(data).then((res:any)=>{
      this.response = `Se agregó el cliente con id: ${res.id}`; 
      this.ngRedux.dispatch({
        type: SAVE,
        lastId: res.id
      })

    })
    

  }
  

}
