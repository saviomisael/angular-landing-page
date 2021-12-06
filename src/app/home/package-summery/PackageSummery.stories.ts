import { Meta, Story } from '@storybook/angular';

import { PackageSummeryComponent } from './package-summery.component';

export default {
  title: 'components/PackageSummery',
  component: PackageSummeryComponent,
} as Meta;

export const Default: Story<PackageSummeryComponent> = (args: PackageSummeryComponent) => ({
  props: args,
});
