import { Component, Input } from '@angular/core';

import { Pirate } from './pirate';

@Component({
  selector: 'my-pirate',
   templateUrl: './pirates.html'
})
export class CharacterComponent {
  @Input() pirate: Pirate;
}
