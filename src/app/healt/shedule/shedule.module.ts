import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AppSheduleComponent } from './component/shedule/shedule.component';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
    { path: '', component: AppSheduleComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        AppSheduleComponent
    ],
    exports: [
        AppSheduleComponent
    ]
})
export class SheduleModule {}