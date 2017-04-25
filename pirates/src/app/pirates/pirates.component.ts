import { Component, Input } from '@angular/core';
import { Pirate } from './pirate';

@Component({
  selector: 'app-pirates',
  templateUrl: './pirates.component.html',
  styleUrls: ['./pirates.component.css']
})
export class PiratesComponent {

    pirates = [
  {
    name: 'John Rackham',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }, {
    name: 'Donald Trump',
    image: 'avatar.svg',
    weapon: 'Twitter',
    vessel: 'Stout'
  }, {
    name: 'Sea Dog',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }, {
    name: 'Jean Lafitte',
    image: 'avatar.svg',
    weapon: 'Sword',
    vessel: 'Bounty'
  }
  ]

  @Input() pirate: Pirate;

  selectedPirate: Pirate;

  select(pirate: Pirate) {
    this.selectedPirate = pirate;
    console.log(this)
  }
}