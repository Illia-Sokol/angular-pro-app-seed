import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'fl-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class FlAuthComponent {
    @Output()
    public submitted = new EventEmitter<FormGroup>();

    public authForm: FormGroup = this.fb.group({
        email: ['', [
            Validators.required,
            Validators.email
        ] ],
        password: [ '', Validators.required ]
    })

    public get passwordValidation() {
        const control = this.authForm.get('password');
        return control.hasError('required') && control.touched;
    }
    
    public get emailValidation() {
        const control = this.authForm.get('email');
        return control.hasError('email') && control.touched;
    }

    constructor(private fb: FormBuilder) {}

    public onSubmit() {
        this.submitted.emit(this.authForm);
    }
}
