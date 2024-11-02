import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, height: '0' }),
        animate('100ms', style({ opacity: 1 })),
        animate('200ms', style({ height: '*' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, height: '*' }),
        animate('100ms', style({ opacity: 0 })),
        animate('200ms', style({ height: '0' })),
      ]),
    ]),
  ],
})
export class ListItemComponent {
  @HostBinding('class') class = 'group';
}
