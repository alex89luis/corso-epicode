import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/todo';
import { iUser } from '../../interfaces/user';
import { TodoService } from '../../service/todo.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-completi',
  templateUrl: './completi.component.html',
  styleUrl: './completi.component.scss'
})
export class CompletiComponent {

allTodo:iTodo [] = []
users:iUser [] = []


  constructor(private alltodoSvc:TodoService, private usersSvc:UserService){}

  ngOnInit(){
    this.allTodo = this.alltodoSvc.getCompleti()
    this.users = this.usersSvc.getAll()
  }


}
