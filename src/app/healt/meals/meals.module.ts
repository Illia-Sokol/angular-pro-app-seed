import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AppMealsComponent } from './component/meals/meals.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AppMealComponent } from './component/meal/meal.component';

const ROUTES: Routes = [
    { path: '', component: AppMealsComponent },
    { path: 'new', component: AppMealComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        AppMealsComponent,
        AppMealComponent
    ],
    exports: [
        AppMealsComponent
    ]
})
export class MealsModule {}