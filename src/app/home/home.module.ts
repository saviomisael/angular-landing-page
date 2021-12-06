import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActiveRouteComponent } from './active-route/active-route.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelDetailsNavigationComponent } from './hotel-details-navigation/hotel-details-navigation.component';

@NgModule({
  declarations: [NavTopComponent, NavBarComponent, ActiveRouteComponent, HotelDetailsComponent, HotelDetailsNavigationComponent],
  imports: [CommonModule],
  exports: [],
})
export class HomeModule {}
