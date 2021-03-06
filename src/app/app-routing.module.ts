import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInGuard } from './shared/logged-in.guard';
import { LoggedOutGuard } from './shared/logged-out.guard';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopsComponent } from './shops/shops.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/shops', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { name: 'Login' },
    canActivate: [LoggedOutGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: { name: 'Registration' },
    canActivate: [LoggedOutGuard]
  },
  {
    path: 'shops',
    component: ShopsComponent,
    data: { name: 'Shops' },
    canActivate: [LoggedInGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
