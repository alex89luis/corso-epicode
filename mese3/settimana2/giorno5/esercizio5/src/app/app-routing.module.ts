import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagine/home/home.component';
import { CompletiComponent } from './pagine/completi/completi.component';
import { IncompletiComponent } from './pagine/incompleti/incompleti.component';
import { UserTaskComponent } from './pagine/user-task/user-task.component';


const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },

  {
    path:'completi',
    component: CompletiComponent
  },

  {
    path:'incompleti',
    component: IncompletiComponent
  },

  {
    path:'utenti',
    component: UserTaskComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
