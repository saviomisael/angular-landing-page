import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActiveRouteComponent } from './active-route/active-route.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelDetailsNavigationComponent } from './hotel-details-navigation/hotel-details-navigation.component';
import { PackageSummeryComponent } from './package-summery/package-summery.component';
import { OtherPackageService } from './shared/services/other-package.service';
import { HttpClientModule } from '@angular/common/http';
import { OtherPackagesComponent } from './other-packages/other-packages.component';
import { GuestReviewComponent } from './guest-review/guest-review.component';
import { StarsBoxComponent } from './stars-box/stars-box.component';
import { NewsletterSectionComponent } from './newsletter-section/newsletter-section.component';

@NgModule({
  declarations: [
    NavTopComponent,
    NavBarComponent,
    ActiveRouteComponent,
    HotelDetailsComponent,
    HotelDetailsNavigationComponent,
    PackageSummeryComponent,
    OtherPackagesComponent,
    GuestReviewComponent,
    StarsBoxComponent,
    NewsletterSectionComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [OtherPackageService],
})
export class HomeModule {}
