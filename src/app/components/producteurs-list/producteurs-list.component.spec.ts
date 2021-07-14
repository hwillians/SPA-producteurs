import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteursListComponent } from './producteurs-list.component';

describe('ProducteursListComponent', () => {
  let component: ProducteursListComponent;
  let fixture: ComponentFixture<ProducteursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteursListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
