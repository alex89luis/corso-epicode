import { UserService } from './../../service/user.service';

import { Component } from '@angular/core';

import { iTodo } from '../../interfaces/todo';
import { TodoService } from '../../service/todo.service';
import { iUser } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  alltodo: iTodo[] = []
  users: iUser[] = []

  constructor(private todoSvc:TodoService,private userSvc:UserService){}
  ngOnInit(){
   this.alltodo = this.todoSvc.getAll()
   this.users = this.userSvc.getAll()

  }




}
