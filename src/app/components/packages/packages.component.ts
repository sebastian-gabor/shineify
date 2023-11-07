import { Component } from '@angular/core';

import { Package } from './package.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent {
  packages: Package[] = [
    new Package(
      'Bronze',
      'This is the premium pack',
      'assets/images/card-2.jpg',
      300
    ),
    new Package(
      'Silver',
      'This is the premium pack',
      'assets/images/card-2.jpg',
      200
    ),
    new Package(
      'Gold',
      'This is the premium pack',
      'assets/images/card-2.jpg',
      500
    ),
  ];
}
