import { Component, ViewChild,} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esercizio1';

  @ViewChild('form', {static: true}) form!: NgForm;

  userForm = {
    nome: '',
    cognome: '',
    email: '',
    username: '',
    password: '',
}

genders = [
    {
        label: 'uomo',
        value: 'uomo'
    },
    {
        label: 'donna',
        value: 'donna'
    }
]

answer = '';


user: any = {
    nome: '',
    cognome: '',
    email: '',
    gender: '',
    username: '',
    password:'',
}

ngOnInit(): void {
    this.form.statusChanges?.subscribe(status => {
        console.log('Stato del form: ', status);
    });
}

generateUsername() {
    this.form.form.patchValue(
        {
            userInfo: {
                username: 'alex-wes',
                
            }
        }
    )
}

submit() {
    console.log(this.form.value);

  
    this.user.username = this.form.value.userInfo.username;
    this.user.email = this.form.value.userInfo.email;
    this.user.nome = this.form.value.userInfo.nome;
    this.user.gender = this.form.value.userInfo.gender;
    this.user.cognome = this.form.value.userInfo.cognome;
    this.user.password = this.form.value.userInfo.password;

    console.log('form inviato: ', this.form);

    this.form.reset();
}

}
