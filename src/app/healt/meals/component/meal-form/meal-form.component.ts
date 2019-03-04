import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Meal } from 'src/app/healt/shared/meals/meals.service';

@Component({
    selector: 'app-form-meal',
    templateUrl: './meal-form.component.html',
    styleUrls: ['./meal-form.component.scss']
})

export class AppFormMealComponent {
    public form: FormGroup = this.fb.group({
        name: ['first', Validators.required],
        ingridients: this.fb.array([''])
    })

    @Output()
    public create = new EventEmitter<Meal>();

    constructor(
        private fb: FormBuilder
    ) { }

    get ingridients() {
        return this.form.get('ingridients') as FormArray;
    }

    public get required() {
        return this.form.get('name').hasError('required') &&
        this.form.get('name').hasError('touched');
    }

    public addMeal() {
        this.ingridients.push(new FormControl(''));
    }

    public removeIngridient(index: number) {
        this.ingridients.removeAt(index);
    }

    public onSubmit() {
        this.create.emit(this.form.value);
    }
}