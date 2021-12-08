import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
})
export class HotelDetailsComponent {
  starsCount = 5;
  readonly stars: string[] = [];
  readonly hotelPrice = 8500;
}
