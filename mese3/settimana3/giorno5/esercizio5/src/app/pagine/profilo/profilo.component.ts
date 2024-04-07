import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { IUser } from '../../models/i-user';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.scss'
})
export class ProfiloComponent {
  constructor(private authSvc:AuthService){}

  user:IUser|undefined;

  ngOnInit(){

    this.authSvc.user$.subscribe(user => {


      this.user = user || undefined;

    })

  }
}
