import { Component, input, signal } from '@angular/core';
import { ITechnique } from '../../../core/models/techniques';
import { Divider } from 'primeng/divider';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-technique-card',
  imports: [Divider, Icon],
  templateUrl: './technique-card.html',
  styleUrl: './technique-card.scss'
})
export class TechniqueCard {
  technique = input<ITechnique>();
  expanded = signal<boolean>(false);

  toggleDescription() {
    this.expanded.update(value => !value);
  }
}
