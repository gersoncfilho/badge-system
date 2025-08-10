import {Component, OnInit, signal} from '@angular/core';
import {PaginatedResponse} from '../../../model/UserData';
import {DataService} from '../../../services/data.service';
import {CurrencyPipe} from '@angular/common';
import {User} from '../../../model/User';
import {ModalComponent} from '../generic-modal/generic-modal.component';
import {UserUpdateFormComponent} from '../user-update-form/user-update-form.component';

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [
    CurrencyPipe,
    ModalComponent,
    UserUpdateFormComponent
  ],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.scss'
})
export class CustomersTableComponent implements OnInit {

  isModalOpen = false;

  selectedUser = signal<User | null>(null);

  usersResponse: PaginatedResponse = {
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 0,
      offset: 0,
      paged: false,
      unpaged: true,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
    },
    last: true,
    totalPages: 0,
    totalElements: 0,
    first: true,
    size: 0,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: 0,
    empty: true,
  };

  errorMessage = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getUsers(1, 10);
  }

  private getUsers(page?: number, pageSize?: number) {
    this.dataService.getAllUsers(page, pageSize).subscribe({
      next: data => {
        this.usersResponse = data;
      },
      error: (error) => this.errorMessage = error.message
    });
  }

  editUser(user: User) {
    this.selectedUser.set(user);
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedUser.set(null);
  }

  deleteUser(id: number) {
    this.dataService.deleteUser(id).subscribe({
      next: data => {
        this.getUsers(1, 10);
      }
    })
  }

  updateUser(user: User) {
    // Placeholder for update logic; ensures template binding compiles and modal closes
    this.closeModal();
  }
}
