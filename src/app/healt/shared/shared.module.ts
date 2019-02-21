import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFireDatabaseModule } from '@angular/fire/database'
import { MealsService } from './meals/meals.service';
 

@NgModule({
    imports: [
        CommonModule,
        AngularFireDatabaseModule
    ]
})
export class SharedModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService
            ]
        }
    }
}