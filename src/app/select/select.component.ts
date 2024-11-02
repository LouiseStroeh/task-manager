import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() value: string = '';
  @Input() options: Array<{ name: string; value: string }> = [];
  @Input() classes: string | Record<string, boolean> = '';
  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.valueChange.emit(selectedValue);
  }
}
