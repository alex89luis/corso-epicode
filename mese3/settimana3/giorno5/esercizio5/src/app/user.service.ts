import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { IUser } from './models/i-user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

userUrl = environment.usersUrl
userArr: IUser [] = []
userSub = new BehaviorSubject<IUser[]>([])
$users= this.userSub.asObservable()


  constructor(private http:HttpClient) {
    this.getAllUser().subscribe(data => {
      this.userSub.next(data)
      this.userArr = data
    })
   }



  getAllUser(){
    return this.http.get<IUser[]>(this.userUrl)

  }

  updateUsersList(): void {
    this.getAllUser().subscribe(u => {
      this.userSub.next(u);
    });
  }
}
