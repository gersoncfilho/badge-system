import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'nav-link',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a [routerLink]="to"
       routerLinkActive="md:text-blue-700 dark:text-white"
       class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100
              md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
              dark:text-white md:dark:hover:text-blue-500
              dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      <ng-content />
    </a>
  `,
})
export class NavLinkComponent {
  @Input() to!: string;
}
