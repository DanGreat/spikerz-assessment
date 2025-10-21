import { Component, OnInit, signal } from '@angular/core';
import { Edge, NgxGraphModule, Node } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { fromEvent } from 'rxjs';
import { NodePopover } from './node-popover/node-popover';

@Component({
  selector: 'app-timeline',
  imports: [NgxGraphModule, NodePopover],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline implements OnInit {
  popoverVisible = signal<boolean>(false);
  popoverX = signal<number>(0);
  popoverY = signal<number>(0);
  selectedNode = signal<Node | null>(null);

  curve = signal(shape.curveBundle.beta(1));

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

  links = signal<Edge[]>([
    { id: 'a', source: '1', target: '2', label: '' },
    { id: 'b', source: '2', target: '3', label: '' },
    { id: 'c', source: '3', target: '4', label: '' },
    { id: 'd', source: '3', target: '5', label: '' },
  ]);

  layoutSettings = signal({
    orientation: 'LR',
  });

  ngOnInit(): void {
    this.hidePopover();
  }

  onNodeClick(event: MouseEvent, node: Node) {
    event.stopPropagation();
    this.popoverVisible.set(true);
    this.selectedNode.set(node);

    this.popoverX.set(event.clientX - 150);
    this.popoverY.set(event.clientY + 10);
  }

  hidePopover() {
    fromEvent(document, 'click').subscribe(() => {
      this.popoverVisible.set(false);
    });
  }
}
