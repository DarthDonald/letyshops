import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInGuard } from './shared/logged-in.guard';
import { LoggedOutGuard } from './shared/logged-out.guard';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [LoggedOutGuard] },
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
  }
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
