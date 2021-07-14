import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Producteur } from 'src/app/models/producteur';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {

  constructor() { }
  @Input()
  producteur!: Producteur;
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  addres = new FormControl('', [Validators.required]);

  getErrorMessage() {
      return 'You must enter a value'; 
  }


  ngOnInit(): void {
  }

}
