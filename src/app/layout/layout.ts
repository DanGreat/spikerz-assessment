import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './side-bar/side-bar';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SideBar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  expanded = signal<boolean>(false);

  onToggleSideNav(expanded: boolean) {
    this.expanded.set(expanded);
  }

  getBodyClass = computed(() => {
    let styleClass = '';
    const expanded = this.expanded();

    if (expanded) styleClass = 'w-[calc(100%_-_16rem)] ml-[16rem]!';
    if (!expanded) styleClass = 'w-[calc(100%_-_5rem)] ml-[5rem]!';

    return styleClass;
  });
}
