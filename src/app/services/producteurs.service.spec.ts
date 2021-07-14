import { TestBed } from '@angular/core/testing';

import { ProducteursService } from './producteurs.service';

describe('ProducteursService', () => {
  let service: ProducteursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducteursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
