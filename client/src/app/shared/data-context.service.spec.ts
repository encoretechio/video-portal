/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataContextService } from './data-context.service';

describe('Service: DataContext', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataContextService]
    });
  });

  it('should ...', inject([DataContextService], (service: DataContextService) => {
    expect(service).toBeTruthy();
  }));
});
