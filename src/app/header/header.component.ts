import { Component } from '@angular/core';
import { SidebarHelpService } from '../services/sidebar-help.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public sidebarHelpService: SidebarHelpService) {}

  toggleNav() {
    this.sidebarHelpService.toggle();
  }
  
}
