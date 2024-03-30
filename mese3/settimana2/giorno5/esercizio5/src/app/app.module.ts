;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagine/home/home.component';
import { CompletiComponent } from './pagine/completi/completi.component';
import { IncompletiComponent } from './pagine/incompleti/incompleti.component';
import { UserTaskComponent } from './pagine/user-task/user-task.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletiComponent,
    IncompletiComponent,
    UserTaskComponent,



   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
