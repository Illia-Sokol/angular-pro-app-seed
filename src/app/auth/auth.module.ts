import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterModule } from './register';
import { LoginModule } from './login';


const ROUTES: Routes = [{
    path: 'auth',
    // component: ''
    children: [
        { path: '', redirectTo: '', pathMatch: 'full' },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    ]
}]

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [

    ]
})

export class AuthModule{}