import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  iconSrc = input.required<string>();
  styleClass = input<string>();
}
