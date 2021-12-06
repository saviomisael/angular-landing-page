import { Component, OnInit } from '@angular/core';
import { fillStars } from '../shared/utils/fill-stars';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
})
export class HotelDetailsComponent implements OnInit {
  private starsCount = 5;
  private starIconUrl = '/assets/images/star-rating.svg';
  readonly stars: string[] = [];
  readonly hotelPrice = 8500;

  ngOnInit(): void {
    this.fillStars();
  }

  fillStars(): void {
    this.stars.push(...fillStars(this.starsCount, this.starIconUrl));
  }
}
