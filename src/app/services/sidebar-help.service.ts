import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidebarHelpService {
  sideNav: MatSidenav;

  setSideNav(nav: MatSidenav) {
    this.sideNav = nav;
  }

  toggle() {
    this.sideNav.toggle();
  }
}
