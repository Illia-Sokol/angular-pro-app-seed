import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { FlAuthComponent } from './components/auth.component';

@NgModule({
    declarations: [
        FlAuthComponent,
    ],
    imports: [
        ReactiveFormsModule
    ],
    exports: [
        FlAuthComponent
    ]
})

export class SharedModule{}