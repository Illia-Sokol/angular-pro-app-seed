import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/sevice/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'fl-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class FlRegisterComponent {
    public error: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public async onSubmit(form: FormGroup) {
        const { email, password } = form.value;
        try {
            await this.authService.createUser(email, password);
            this.router.navigate(['/']);
        } catch (err) {
            console.log('sokol');
            this.error = err.message;
        }
    }
}
