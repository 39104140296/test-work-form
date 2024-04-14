import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  imports: [NgClass, NgStyle],
  standalone: true
})
export class MessageComponent implements OnChanges {
  @Input() text: string = '';
  @Input() type: 'info' | 'error' | 'success' = 'info';
  style: Record<string, string>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['type']) {
      this.style = this.getStyle();
    }
  }

  getStyle(): Record<string, string> {
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