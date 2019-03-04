import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Meal } from '../meals/meals.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppItemListComponent {
    @Input()
    public item: Meal;

    public toggled: boolean = false;

    @Output()
    public remove = new EventEmitter<Meal>();

    constructor() {}

    public toggle() {
        this.toggled = !this.toggled;
    }

    public getRouter(item: Meal) {
        return ['../meals', item.$key];
    }

    public removeItem() {
        this.remove.emit(this.item);
    }
}