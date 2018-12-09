import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

// var config = {
//   apiKey: "AIzaSyCUBiRVUDe4U6yXVSxKVSY7DxMKMUtBEkI",
//   authDomain: "fitness-app-17c3d.firebaseapp.com",
//   databaseURL: "https://fitness-app-17c3d.firebaseio.com",
//   projectId: "fitness-app-17c3d",]
//   storageBucket: "fitness-app-17c3d.appspot.com",
//   messagingSenderId: "761197483639"
// };
