import { Meta, Story } from '@storybook/angular';

import { StarsBoxComponent } from './stars-box.component';

export default {
  title: 'components/StarsBox',
  component: StarsBoxComponent,
} as Meta;

export const Default: Story<StarsBoxComponent> = (args: StarsBoxComponent) => ({
  props: args,
});

export const WhenStarsCountIsGreaterThanZero = Default.bind({});

WhenStarsCountIsGreaterThanZero.args = {
  starsCount: 5,
};
