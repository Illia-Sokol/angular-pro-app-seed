import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlAuthComponent } from './components/auth.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './sevice/auth.service';

@NgModule({
    declarations: [
        FlAuthComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        FlAuthComponent
    ]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthService
            ]
        }
    }
}