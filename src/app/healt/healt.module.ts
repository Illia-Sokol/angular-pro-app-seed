import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
 
const ROUTES: Routes = [
    { path: 'meals', loadChildren: './meals/meals.module#MealsModule' },
    { path: 'workout', loadChildren: './workout/workout.module#WorkoutModule'},
    { path: 'shedule', loadChildren: './shedule/shedule.module#SheduleModule'},
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class HealsModule {}