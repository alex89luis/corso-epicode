import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { GuestGuard } from './auth/guest.guard';


const routes: Routes = [
 { path: 'film', loadChildren: () => import('./pagine/film/film.module').then(m => m.FilmModule),
 canActivate:[AuthGuard],


},
 { path: 'utenti', loadChildren: () => import('./pagine/utenti/utenti.module').then(m => m.UtentiModule),
 canActivate:[AuthGuard],

},
 { path: 'profilo', loadChildren: () => import('./pagine/profilo/profilo.module').then(m => m.ProfiloModule),
 canActivate:[AuthGuard],

},
 { path: 'auth',loadChildren: () =>import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[GuestGuard]

  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
