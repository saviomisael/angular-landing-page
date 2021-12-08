import { Component, OnInit } from '@angular/core';
import { fillStars } from '../shared/utils/fill-stars';

@Component({
  selector: 'app-guest-review',
  templateUrl: './guest-review.component.html',
  styleUrls: ['./guest-review.component.scss'],
})
export class GuestReviewComponent implements OnInit {
  stars: string[] = [];
  private count = 5;

  ngOnInit() {
    this.stars = fillStars(this.count, '/assets/images/star-rating.svg');
  }
}
