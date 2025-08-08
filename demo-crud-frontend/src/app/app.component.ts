import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/organisms/navbar/navbar.component';
import {UsersTableComponent} from './components/organisms/users-table/users-table.component';
import {DataService} from './services/data.service';
import {ToastComponent} from './components/shared/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, UsersTableComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-crud-frontend';
}
