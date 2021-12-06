import { Meta, Story } from '@storybook/angular';

import { HotelDetailsComponent } from './hotel-details.component';

export default {
  title: 'components/HotelDetails',
  component: HotelDetailsComponent,
} as Meta;

export const Default: Story<HotelDetailsComponent> = (args: HotelDetailsComponent) => ({
  props: args,
});
