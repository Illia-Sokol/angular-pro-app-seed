import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class FlLoginComponent {
    public onSubmit(form: FormGroup) {
        console.log('login', form.value);
    }
}
