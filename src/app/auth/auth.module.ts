import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const ROUTES: Routes = [{
    path: 'auth',
    children: [
        { path: '', redirectTo: '', pathMatch: 'full' },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
}]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AuthModule{}