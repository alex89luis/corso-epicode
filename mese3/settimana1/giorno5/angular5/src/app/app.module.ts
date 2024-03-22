import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { Error404Component } from './components/error404/error404.component';
import { DisponibiliComponent } from './components/disponibili/disponibili.component';
import { IndisponibiliComponent } from './components/indisponibili/indisponibili.component';
import { BrandComponent } from './components/brand/brand.component';
import { CardComponent } from './components/card/card.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Fiat',
    component: FiatComponent
  },
  {
    path: 'Ford',
    component: FordComponent
  },
  {
    path: 'Audi',
    component: AudiComponent
  },
  {
    path: '**',
    component: Error404Component
  },
  {
    path: 'Disponibili',
    component: DisponibiliComponent
  },
  {
    path: 'Indisponibili',
    component: IndisponibiliComponent
  },
  {
    path: 'Brand',
    component: BrandComponent
  },
  {
    path: 'Card',
    component: CardComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    Error404Component,
    DisponibiliComponent,
    IndisponibiliComponent,
    BrandComponent,
    CardComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
