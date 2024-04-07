import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { IUser } from '../../models/i-user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.scss'
})
export class UtentiComponent {
  users: IUser[]=[];

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.$users.subscribe(u=> {
      this.users = u;
    });
  }
}
