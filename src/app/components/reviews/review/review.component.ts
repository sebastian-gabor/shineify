import { Component } from '@angular/core';

import { Review } from '../review.mode';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  reviews = [
    new Review(
      'https://i.pravatar.cc/50?img=13',
      'Sebastian Gabor',
      '5/5',
      'Very good services',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt pariatur  in cumque amet odit quos ut, obcaecati quibusdam!'
    ),
    new Review(
      'https://i.pravatar.cc/50?img=13',
      'Sebastian Gabor',
      '4.8/5',
      'Very good services',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt pariatur  in cumque amet odit quos ut, obcaecati quibusdam!'
    ),
    new Review(
      'https://i.pravatar.cc/50?img=13',
      'Sebastian Gabor',
      '4.9/5',
      'Very good services',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt pariatur  in cumque amet odit quos ut, obcaecati quibusdam!'
    ),
  ];
}
