import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AppWorkoutComponent } from './component/workout/workout.component';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
    { path: '', component: AppWorkoutComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        AppWorkoutComponent
    ],
    exports: [
        AppWorkoutComponent
    ]
})
export class WorkoutModule {}