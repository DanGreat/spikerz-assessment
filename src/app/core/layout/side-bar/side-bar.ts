import { Component, computed, inject, OnInit, output, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Divider } from 'primeng/divider';
import { Tooltip } from 'primeng/tooltip';
import { debounceTime, fromEvent } from 'rxjs';
import { Icon } from '../../../shared/components/icon/icon';
import { APP_MENU } from '../../constants/menu';
import { IMenu } from '../../models/menu';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, RouterLinkActive, Icon, Divider, Tooltip],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar implements OnInit {
  private readonly router = inject(Router);

  appMenu = signal<IMenu[]>(APP_MENU);
  topMenu = computed(() => this.appMenu().filter((menu) => menu.position === 'top'));
  bottomMenu = computed(() => this.appMenu().filter((menu) => menu.position === 'bottom'));

  expanded = signal<boolean>(globalThis.innerWidth > 768);
  toggleSideNav = output<boolean>();

  ngOnInit(): void {
    this.onWindowResize();
  }

  onWindowResize() {
    fromEvent(globalThis, 'resize')
      .pipe(debounceTime(500))
      .subscribe(() => {
        if (globalThis.innerWidth > 768 && !this.expanded()) {
          this.expanded.set(true);
          this.toggleSideNav.emit(this.expanded());
        } else if (globalThis.innerWidth <= 768 && this.expanded()) {
          this.expanded.set(false);
          this.toggleSideNav.emit(this.expanded());
        }
      });
  }

  isActiveRoute(menu: IMenu): boolean {
    return this.router.url.includes(menu.path);
  }

  toggleSideBar() {
    this.expanded.update((val) => !val);
    this.toggleSideNav.emit(this.expanded());
  }
}
