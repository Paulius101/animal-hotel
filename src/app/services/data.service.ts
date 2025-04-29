import { Injectable } from '@angular/core';
import { Service, servicesData } from '../data/services-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getServices(): Service[] {
    return servicesData;
  }
}
