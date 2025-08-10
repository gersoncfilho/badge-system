import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, Toast } from '../../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-4 right-4 z-50 space-y-2">
      @for (toast of toasts; track toast.id) {
        <div
          class="min-w-[300px] p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out"
          [ngClass]="{
            'bg-green-500': toast.type === 'success',
            'bg-red-500': toast.type === 'error',
            'bg-blue-500': toast.type === 'info'
          }"
        >
          <div class="flex justify-between items-center text-white">
            <p>{{ toast.message }}</p>
            <button
              class="ml-4 hover:opacity-80"
              (click)="removeToast(toast.id)"
            >
              ×
            </button>
          </div>
        </div>
      }
    </div>
  `
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private subscription: Subscription = new Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.subscription = this.toastService.getToasts()
      .subscribe(toasts => {
        this.toasts = toasts;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeToast(id: number) {
    this.toastService.remove(id);
  }
}
