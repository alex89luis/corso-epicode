import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/todo';
import { iUser } from '../../interfaces/user';
import { TodoService } from '../../service/todo.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-incompleti',
  templateUrl: './incompleti.component.html',
  styleUrl: './incompleti.component.scss'
})
export class IncompletiComponent {

  allTodo:iTodo [] = []
users:iUser [] = []


  constructor(private alltodoSvc:TodoService, private usersSvc:UserService){}

  ngOnInit(){
    this.allTodo = this.alltodoSvc.getInCompleti()
    this.users = this.usersSvc.getAll()
  }
}
