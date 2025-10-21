import { Component, computed, inject, output, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Divider } from 'primeng/divider';
import { Tooltip } from 'primeng/tooltip';
import { APP_MENU } from '../../core/constants/menu';
import { IMenu } from '../../core/models/menu';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, RouterLinkActive, Icon, Divider, Tooltip],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  private readonly router = inject(Router);

  appMenu = signal<IMenu[]>(APP_MENU);
  topMenu = computed(() => this.appMenu().filter((menu) => menu.position === 'top'));
  bottomMenu = computed(() => this.appMenu().filter((menu) => menu.position === 'bottom'));

  expanded = signal<boolean>(false);
  toggleSideNav = output<boolean>();

  isActiveRoute(menu: IMenu): boolean {
    return this.router.url.includes(menu.path);
  }

  toggleSideBar() {
    this.expanded.update((val) => !val);
    this.toggleSideNav.emit(this.expanded());
  }
}
