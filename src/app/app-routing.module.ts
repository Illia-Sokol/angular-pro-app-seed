import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HealsModule } from './healt/healt.module';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealsModule,
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
