import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../model/User';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      (click)="onBackdropClick($event)"
    >
      <div
        class="bg-white rounded-lg shadow-lg p-6 min-w-[300px] relative"
        (click)="$event.stopPropagation()"
      >
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          (click)="close()"
        >
          ×
        </button>
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() user: User | null = null;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent) {
    this.close();
  }
}
