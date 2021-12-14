import { Meta, Story } from '@storybook/angular';

import { FooterBottomComponent } from './footer-bottom.component';

export default {
  title: 'components/FooterBottom',
  component: FooterBottomComponent,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<FooterBottomComponent> = (args: FooterBottomComponent) => ({
  props: args,
});
