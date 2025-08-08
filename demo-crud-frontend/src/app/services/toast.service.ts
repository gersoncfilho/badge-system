import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: Toast[] = []
  private toastSubject = new BehaviorSubject<Toast[]>([])

  getToasts(): Observable<Toast[]> {
    return this.toastSubject.asObservable()
  }

  show(message: string, type: 'success' | 'error' | 'info' = 'success')  {
    const toast: Toast = {
      message,
      type,
      id: Date.now()
    }
    this.toasts = [...this.toasts, toast];
    this.toastSubject.next(this.toasts);

    setTimeout(() => {
      this.remove(toast.id);
    }, 3000)
  }

  remove(id:number){
    this.toasts = this.toasts.filter(toast => toast.id !== id)
    this.toastSubject.next(this.toasts);
  }
}
