import { Component } from '@angular/core';
import { iUser } from '../../interfaces/user';
import { iTodo } from '../../interfaces/todo';
import { UserService } from '../../service/user.service';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.scss'
})
export class UserTaskComponent {
    users:{
      user:iUser,
      todo:iTodo[]
    }[] = []


      constructor(private userSvc:UserService, private todoSvc:TodoService){}

        ngOnInit(){

          let allUser = this.userSvc.getAll()
          let allTodo = this.todoSvc.getAll()
          this.users = allUser.map(user =>({
            user:user,
            todo:allTodo.filter(todo => todo.userId === user.id)


          }))
        }







}
