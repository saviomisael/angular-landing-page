import { Meta, Story } from '@storybook/angular';

import { OtherActivitiesComponent } from './other-activities.component';

export default {
  title: 'components/OtherActivities',
  component: OtherActivitiesComponent,
} as Meta;

export const Default: Story<OtherActivitiesComponent> = (args: OtherActivitiesComponent) => ({
  props: args,
});
