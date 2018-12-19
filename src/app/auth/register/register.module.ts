import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlRegisterComponent } from './containers/register.component';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
    { path: '', component: FlRegisterComponent }
]

@NgModule({
    declarations: [
        FlRegisterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule,
        FlRegisterComponent
    ]
})

export class RegisterModule{}