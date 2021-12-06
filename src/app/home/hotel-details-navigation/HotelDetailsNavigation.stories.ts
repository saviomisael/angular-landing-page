import { Meta, Story } from '@storybook/angular';

import { HotelDetailsNavigationComponent } from './hotel-details-navigation.component';

export default {
  title: 'components/HotelDetailsNavigation',
  component: HotelDetailsNavigationComponent,
} as Meta;

export const Default: Story<HotelDetailsNavigationComponent> = (args: HotelDetailsNavigationComponent) => ({
  props: args,
});
