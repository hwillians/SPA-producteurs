import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(opened: boolean ) {
      this.emitChangeSource.next(opened);
  }
}
