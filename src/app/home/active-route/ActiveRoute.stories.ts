import { Meta, Story } from '@storybook/angular';

import { ActiveRouteComponent } from './active-route.component';

export default {
  title: 'components/ActiveRoute',
  component: ActiveRouteComponent,
} as Meta;

export const Default: Story<ActiveRouteComponent> = (args: ActiveRouteComponent) => ({
  props: args,
});
