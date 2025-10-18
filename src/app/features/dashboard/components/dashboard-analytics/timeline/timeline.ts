import { Component, NO_ERRORS_SCHEMA, signal, viewChild } from '@angular/core';
import { Edge, NgxGraphModule, Node } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { Popover } from 'primeng/popover';

@Component({
  selector: 'app-timeline',
  imports: [NgxGraphModule, Popover],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  popover = viewChild<Popover>('popover');
  selectedNode: Node | null = null;

  curve = signal(shape.curveBundle.beta(0.85));

  nodes = signal<Node[]>([
    {
      id: '1',
      label: 'Loremipsumm',
      data: { img: 'icons/node-1.svg' },
    },
    {
      id: '2',
      label: 'Loremipsu',
      data: { img: 'icons/node-2.svg' },
    },
    {
      id: '3',
      label: 'Loremipsu',
      data: { img: 'icons/node-2.svg' },
    },
    {
      id: '4',
      label: 'Loremipsumdolorsit',
      data: { img: 'icons/node-3.svg', ip: '192.168.1.1' },
    },
    {
      id: '5',
      label: 'Loremipsumdolorsit002',
      data: { img: 'icons/node-3.svg', ip: '192.168.1.2' },
    },
  ]);

  links =  signal<Edge[]>([
    { id: 'a', source: '1', target: '2', label: '' },
    { id: 'b', source: '2', target: '3', label: '' },
    { id: 'c', source: '3', target: '4', label: '' },
    { id: 'd', source: '3', target: '5', label: '' },
  ]);

  layoutSettings = signal({
    orientation: 'LR',
  });

  showPopover(event: MouseEvent, node: Node): void {
    this.selectedNode = node;
    this.popover()?.toggle(event);
  }
}
