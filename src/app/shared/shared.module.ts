import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { ShopsService } from './shops.service';

import { LoggedInGuard } from './logged-in.guard';
import { LoggedOutGuard } from './logged-out.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    LoggedInGuard,
    LoggedOutGuard,
    ShopsService
  ],
  declarations: []
})
export class SharedModule { }
