import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireDatabaseModule } from '@angular/fire/database'
import { MealsService } from './meals/meals.service';
import { AppItemListComponent } from './component/item-list.component';
 

@NgModule({
    imports: [
        CommonModule,
        AngularFireDatabaseModule
    ],
    declarations: [
        AppItemListComponent
    ],
    exports: [
        AppItemListComponent
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