import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Producteur } from 'src/app/models/producteur';
import { ProducteursService } from 'src/app/services/producteurs.service';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {

  constructor(private producteurservice: ProducteursService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) { }

  producteur: Producteur = new Producteur;
  firstname = new FormControl('');
  lastname = new FormControl('');
  addres = new FormControl('');
  editable: boolean = false;

  editOn() {
    this.editable = true
    console.log(this.editable)
    this.firstname = new FormControl('', [Validators.required]);
    this.lastname = new FormControl('', [Validators.required]);
    this.addres = new FormControl('', [Validators.required]);
    this.ngOnInit()
  }
  editOff() {
    this.firstname = new FormControl('');
    this.lastname = new FormControl('');
    this.addres = new FormControl('');
    this.editable = false;
    console.log(this.editable)

    this.ngOnInit()
  }
  save() {

  }
  cancel() {

  }

  getErrorMessage() {
    return 'You must enter a value';
  }


  ngOnInit(): void {
    this.iconRegistry
    .addSvgIcon(
      'avocado', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/avocado.svg'))
    .addSvgIcon(
      'corn', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/corn.svg'))
    .addSvgIcon(
      'wheat', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/wheat.svg'));

    this.producteurservice.producteurEmitted.subscribe(
      producteur => {
        this.producteur = producteur
      });
  }

}
