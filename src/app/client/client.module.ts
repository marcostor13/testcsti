import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent, ListComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule   
  ]
})
export class ClientModule { }
