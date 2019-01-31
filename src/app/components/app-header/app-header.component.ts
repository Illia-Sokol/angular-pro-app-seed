import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/auth/shared/sevice/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
    @Input()
    public user: User;

    @Output()
    public logOut = new EventEmitter<any>();

    public onLogOut() {
        this.logOut.emit();
    }
}
