import { Component } from '@angular/core';

@Component({
  selector: 'app-other-activities',
  templateUrl: './other-activities.component.html',
  styleUrls: ['./other-activities.component.scss'],
})
export class OtherActivitiesComponent {
  activitiesTitles = [
    'The curious corner of chamarel',
    'Gymkhana club golf course',
    'Tamarind falls hiking trip - full day',
    'The blue marine discovery quest',
  ];

  activitiesImages = [
    '/assets/images/activity-1.png',
    '/assets/images/activity-2.png',
    '/assets/images/activity-3.png',
    '/assets/images/activity-4.png',
  ];
}
