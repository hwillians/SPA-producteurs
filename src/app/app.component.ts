import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
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

  open() {
    this.opened = true
  }

  fixed() {
    this.fix = !this.fix
  }

  constructor(private iconRegistry: MatIconRegistry, private sidenavService: SidenavService, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'push-pin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/push-pin.svg'));
   
      sidenavService.changeEmitted$.subscribe(
      opened => {
        this.opened = opened
      });
  }
}
