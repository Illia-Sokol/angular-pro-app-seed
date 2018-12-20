import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fl-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class FlRegisterComponent {
    public onSubmit(form: FormGroup) {
        console.log('register', form.value);
    }
}
