import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars-box',
  templateUrl: './stars-box.component.html',
  styleUrls: ['./stars-box.component.scss'],
})
export class StarsBoxComponent implements OnInit, OnChanges {
  // TODO - remove fill stars function utils

  @Input() starsCount = 0;
  stars: string[] = [];
  private iconUrl = '/assets/images/star-rating.svg';

  ngOnInit(): void {
    this.stars = this.fillStars(this.starsCount, this.iconUrl);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['starsCount'].currentValue !== changes['starsCount'].previousValue) {
      this.stars = this.fillStars(this.starsCount, this.iconUrl);
    }
  }

  private fillStars(starsCount: number, content: string): string[] {
    const stars: string[] = [];

    for (let index = 0; index < starsCount; index++) {
      stars.push(content);
    }

    return stars;
  }
}
