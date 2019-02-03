import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from './store';
import { AppHeaderComponent } from './components/app-header';
import { AppNavComponent } from './components/app-nav';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
    // Store
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
