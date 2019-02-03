import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AppMealsComponent } from './component/meals/meals.component';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
    { path: '', component: AppMealsComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        AppMealsComponent
    ],
    exports: [
        AppMealsComponent
    ]
})
export class MealsModule {}