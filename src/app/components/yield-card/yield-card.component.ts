import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Producteur } from 'src/app/models/producteur';

@Component({
  selector: 'app-yield-card',
  templateUrl: './yield-card.component.html',
  styleUrls: ['./yield-card.component.css']
})
export class YieldCardComponent implements OnInit {

  constructor() { }
  @Input()
  producteur!: Producteur;
  addres = new FormControl('', [Validators.required]);

  getErrorMessage() {
      return 'You must enter a value'; 
  }

  ngOnInit(): void {
  }

}
