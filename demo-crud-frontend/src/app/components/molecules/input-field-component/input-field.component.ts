import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input-field.component.html'
})
export class InputFieldComponent {
  @Input({required: true}) control!: FormControl;
  @Input() type?: string;
  @Input() id?: string;
}
