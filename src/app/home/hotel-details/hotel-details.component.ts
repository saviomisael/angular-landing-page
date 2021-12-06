import { Component, OnInit } from '@angular/core';

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
    for (let index = 0; index < this.starsCount; index++) {
      this.stars.push(this.starIconUrl);
    }
  }
}
