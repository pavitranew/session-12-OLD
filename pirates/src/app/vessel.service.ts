import { Injectable } from '@angular/core';

@Injectable()
export class VesselService {
  getVessels() {
    return [
    { id: 1, name: 'Adventure Galley' },
    { id: 2, name: 'HMS Rackham' },
    { id: 3, name: 'Boo Yah' }
    ]
  }
}