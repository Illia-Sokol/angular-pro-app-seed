import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlLoginComponent } from './containers/login.component';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
    { path: '', component: FlLoginComponent }
]

@NgModule({
    declarations: [
        FlLoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule,
        FlLoginComponent
    ]
})

export class LoginModule{}