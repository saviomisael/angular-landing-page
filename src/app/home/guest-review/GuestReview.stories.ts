import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StarsBoxComponent } from '../stars-box/stars-box.component';

import { GuestReviewComponent } from './guest-review.component';

export default {
  title: 'components/GuestReview',
  component: GuestReviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [StarsBoxComponent],
    }),
  ],
} as Meta;

export const Default: Story<GuestReviewComponent> = (args: GuestReviewComponent) => ({
  props: args,
});
