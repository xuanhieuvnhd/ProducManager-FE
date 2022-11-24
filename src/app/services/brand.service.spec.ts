// @ts-ignore
import { TestBed } from '@angular/core/testing';

import { BrandService } from './brand.service';

// @ts-ignore
describe('BrandService', () => {
  let service: BrandService;

  // @ts-ignore
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandService);
  });

  // @ts-ignore
  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
