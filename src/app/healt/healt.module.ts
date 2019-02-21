import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuardsComponent } from '../auth/shared/guards/auth.guards';

import { SharedModule } from './shared/shared.module';
 
const ROUTES: Routes = [
    { path: 'meals', canActivate: [AuthGuardsComponent], loadChildren: './meals/meals.module#MealsModule' },
    { path: 'workout', canActivate: [AuthGuardsComponent], loadChildren: './workout/workout.module#WorkoutModule'},
    { path: 'shedule', canActivate: [AuthGuardsComponent], loadChildren: './shedule/shedule.module#SheduleModule'},
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ]
})
export class HealsModule {}