import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'fl-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class FlAuthComponent {
    public authForm: FormGroup = this.fb.group({
        name: [''],
        email: ['', Validators.required ]
    })

    constructor(private fb: FormBuilder) {}

    public onSubmit() {
        console.log('submit');
    }
}
