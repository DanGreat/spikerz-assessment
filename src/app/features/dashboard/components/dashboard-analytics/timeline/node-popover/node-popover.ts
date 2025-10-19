import { Component, input } from '@angular/core';
import { Node } from '@swimlane/ngx-graph';
import { Icon } from "../../../../../../shared/components/icon/icon";

@Component({
  selector: 'app-node-popover',
  imports: [Icon],
  templateUrl: './node-popover.html',
  styleUrl: './node-popover.scss'
})
export class NodePopover {
  node = input<Node | null>(null);
}
