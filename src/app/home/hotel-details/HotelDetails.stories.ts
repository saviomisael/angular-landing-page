import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HotelDetailsNavigationComponent } from '../hotel-details-navigation/hotel-details-navigation.component';

import { HotelDetailsComponent } from './hotel-details.component';

export default {
  title: 'components/HotelDetails',
  component: HotelDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [HotelDetailsNavigationComponent],
    }),
  ],
} as Meta;

export const Default: Story<HotelDetailsComponent> = (args: HotelDetailsComponent) => ({
  props: args,
});
