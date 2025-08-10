import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {DataService} from '../../../services/data.service';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {PaginationComponent} from '../../organisms/pagination/pagination.component';
import {PaginatedResponse} from '../../../model/UserData';
import {CustomersTableComponent} from '../../organisms/users-table/customers-table.component';
import {ToastComponent} from '../../organisms/toast/toast.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    PaginationComponent,
    CustomersTableComponent,
    ToastComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  totalRecords: number = 0;
  currentPage: number = 1;



  onPageChange(page: number) {
    this.currentPage = page;
  }
}
