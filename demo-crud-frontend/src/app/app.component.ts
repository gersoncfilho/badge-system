import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/organisms/navbar/navbar.component';
import {CustomersTableComponent} from './components/organisms/users-table/customers-table.component';
import {DataService} from './services/data.service';
import {ToastComponent} from './components/organisms/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CustomersTableComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-crud-frontend';
}
