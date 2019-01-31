import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/sevice/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'fl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class FlLoginComponent {
    public error: string;

    constructor(
        private authservice: AuthService,
        private router: Router
        ) {}

    public async login(form: FormGroup) {
        const { email, password } = form.value;
        try {
            await this.authservice.loginUser(email, password);
            this.router.navigate(['/']);
        } catch (err) {
            this.error = err.message;
        }
    }
    
}
