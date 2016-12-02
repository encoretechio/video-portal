/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DataService } from '../data.service';

describe('Component: Home', () => {
  it('should create an instance', () => {
    let dataservice:DataService;
    let component = new HomeComponent(dataservice);
    expect(component).toBeTruthy();
  });
});
