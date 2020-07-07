import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientModule } from './client/client.module';


const routes: Routes = [
  {
    path: 'client',
    loadChildren: () => ClientModule
  },
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
