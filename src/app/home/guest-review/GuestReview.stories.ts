import { Meta, Story } from '@storybook/angular';

import { GuestReviewComponent } from './guest-review.component';

export default {
  title: 'components/GuestReview',
  component: GuestReviewComponent,
} as Meta;

export const Default: Story<GuestReviewComponent> = (args: GuestReviewComponent) => ({
  props: args,
});
