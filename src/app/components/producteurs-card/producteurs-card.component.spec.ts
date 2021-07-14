import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteursCardComponent } from './producteurs-card.component';

describe('ProducteursCardComponent', () => {
  let component: ProducteursCardComponent;
  let fixture: ComponentFixture<ProducteursCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducteursCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteursCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
