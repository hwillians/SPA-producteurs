import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  
  constructor() { }


  private emitChangeSource = new Subject<any>()
  private toCloseProducteursCard = new Subject<boolean>()

  changeEmitted$ = this.emitChangeSource.asObservable()
  producteursCardColsed$= this.toCloseProducteursCard.asObservable()

  emitChange(opened: boolean ) {
    this.emitChangeSource.next(opened)
  }
  
  closeProducteursCard(opened: boolean) {
    this.toCloseProducteursCard.next(opened)
  }
}
