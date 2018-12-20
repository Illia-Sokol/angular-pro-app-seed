import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlAuthComponent } from './components/auth.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FlAuthComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        FlAuthComponent
    ]
})

export class SharedModule{}