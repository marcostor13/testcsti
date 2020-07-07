import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IAppState } from 'src/app/store';
import { NgRedux } from '@angular-redux/store';
import { std } from 'mathjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  prom: Number = 0
  lastId: String = 'Hola'
 
  desv: Number = 0

  constructor(private api: ApiService, private ngRedux: NgRedux<IAppState>) {

   }

  ngOnInit(): void {
    this.getData()
    this.lastId = this.ngRedux.getState().lastId
  }

  getData() {   

    this.api.getDocuments({ collection: 'clients' }).get().subscribe((querySnapshot) => {
      let sum = 0; 
      let array = [] 
      querySnapshot.forEach((doc) => {
        let age = doc.data().age
        sum = sum + age    
        array.push(age)
      })
      this.prom = sum / querySnapshot.size
      this.desv = std(array)
    })

  }


}