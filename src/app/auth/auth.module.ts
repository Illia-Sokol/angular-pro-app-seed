import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFireModule, FirebaseAppConfig, FirebaseOptions } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [{
    path: 'auth',
    children: [
        { path: '', redirectTo: '', pathMatch: 'full' },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
}]

export const firebaseOptions: FirebaseOptions = {
    production: false
}

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyCUBiRVUDe4U6yXVSxKVSY7DxMKMUtBEkI",
    authDomain: "fitness-app-17c3d.firebaseapp.com",
    databaseURL: "https://fitness-app-17c3d.firebaseio.com",
    projectId: "fitness-app-17c3d",
    storageBucket: "fitness-app-17c3d.appspot.com",
    messagingSenderId: "761197483639"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
    exports: [
        RouterModule
    ]
})

export class AuthModule{}