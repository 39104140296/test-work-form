import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  imports: [NgClass, NgStyle],
  standalone: true
})
export class MessageComponent {
  @Input() text: string = '';
  @Input() type: 'info' | 'error' | 'success' = 'info';

  getStyle() {
    switch (this.type) {
      case 'success':
        return { 'background-color': '#4caf50', 'color': 'white' };
      case 'error':
        return { 'background-color': '#e53935', 'color': 'white' };
      case 'info':
      default:
        return { 'background-color': '#2196f3', 'color': 'white' };
    }
  }
}