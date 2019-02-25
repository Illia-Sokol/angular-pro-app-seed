import { Component, Input } from "@angular/core";
import { Meal } from '../meals/meals.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class AppItemListComponent {
    @Input()
    public meals: any;
}