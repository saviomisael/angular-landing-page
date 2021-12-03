import { Meta, Story } from '@storybook/angular';

import { NavTopComponent } from './nav-top.component';

export default {
  title: 'components/NavTop',
  component: NavTopComponent,
} as Meta;

export const Default: Story<NavTopComponent> = (args: NavTopComponent) => ({
  props: args,
});
