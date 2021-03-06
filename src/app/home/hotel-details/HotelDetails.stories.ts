import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HotelDetailsNavigationComponent } from '../hotel-details-navigation/hotel-details-navigation.component';
import { PackageSummeryComponent } from '../package-summery/package-summery.component';
import { StarsBoxComponent } from '../stars-box/stars-box.component';

import { HotelDetailsComponent } from './hotel-details.component';

export default {
  title: 'components/HotelDetails',
  component: HotelDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [HotelDetailsNavigationComponent, PackageSummeryComponent, StarsBoxComponent],
    }),
  ],
} as Meta;

export const Default: Story<HotelDetailsComponent> = (args: HotelDetailsComponent) => ({
  props: args,
});
