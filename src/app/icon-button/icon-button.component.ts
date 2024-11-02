import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input() classes: string = '';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
