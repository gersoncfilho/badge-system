import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../../model/User';
import {InputFieldComponent} from '../../molecules/input-field.component';

@Component({
  selector: 'app-user-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-update-form.component.html',
  styleUrl: './user-update-form.component.css'
})
export class UserUpdateFormComponent {
  private fb = inject(FormBuilder);

  @Input() set user(v: User | null | undefined) {
    if (!v) return;
    this.form.reset();
    this.form.patchValue({
      ...v,
    });
    // Keep id non-editable
    this.form.controls.id.disable();
  }

  @Output() submitted = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

  form = this.fb.nonNullable.group({
    id: this.fb.nonNullable.control<number>(0),
    name: this.fb.nonNullable.control<string>('', {validators: [Validators.required]}),
    email: this.fb.nonNullable.control<string>('', {validators: [Validators.required, Validators.email]}),
    phone: this.fb.nonNullable.control<string>('', {validators: [Validators.required]}),
    address: this.fb.nonNullable.control<string>(''),
    company: this.fb.nonNullable.control<string>(''),
    age: this.fb.nonNullable.control<number>(0, {validators: [Validators.min(0)]}),
    gender: this.fb.nonNullable.control<string>(''),
    eyeColor: this.fb.nonNullable.control<string>(''),
    isActive: this.fb.nonNullable.control<boolean>(false),
    latitude: this.fb.nonNullable.control<number>(0),
    longitude: this.fb.nonNullable.control<number>(0),
    balance: this.fb.nonNullable.control<string>(''),
    picture: this.fb.nonNullable.control<string>(''),
    about: this.fb.nonNullable.control<string>(''),
    registered: this.fb.nonNullable.control<string>(''),
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = {
      ...this.form.getRawValue(),
    } as User;
    this.submitted.emit(value);
  }

  onCancel() {
    this.cancel.emit();
  }
}
