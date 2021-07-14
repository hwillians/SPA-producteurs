import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldCardComponent } from './yield-card.component';

describe('YieldCardComponent', () => {
  let component: YieldCardComponent;
  let fixture: ComponentFixture<YieldCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YieldCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
