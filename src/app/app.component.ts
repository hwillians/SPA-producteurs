import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPA-producteurs';
  @ViewChild('menupanel') menupanel!: MatSidenav;

  fix: boolean = true
  opened: boolean = true

  fixed() {
    this.fix = !this.fix
  }

  constructor(private sidenavService: SidenavService) {
    sidenavService.changeEmitted$.subscribe(
      opened => {
        this.opened = opened
      });
  }
}
