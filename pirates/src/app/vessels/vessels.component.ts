import { Component } from '@angular/core';

@Component({
  selector: 'app-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.css']
})
export class VesselsComponent {

  vessels = [
    { id: 1, name: 'Adventure Galley' },
    { id: 2, name: 'HMS Rackham' },
    { id: 3, name: 'Stout' }
  ];

}
