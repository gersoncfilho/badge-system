import {Component, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnChanges {
 @Input()
 totalRecords: number = 0;

 @Input()
  recordsPerPage: number = 10;

 @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>();

 totalPages: number = 0;
 currentPage: number = 1;
 pages: number[] = [];

 ngOnChanges(): void {
   this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage);
   this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
 }

 gotoPage(page: number): void {
   this.currentPage = page;
   this.pageChange.emit(this.currentPage);
 }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }
}
