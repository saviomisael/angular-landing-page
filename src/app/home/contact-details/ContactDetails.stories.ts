import { Meta, Story } from '@storybook/angular';

import { ContactDetailsComponent } from './contact-details.component';

export default {
  title: 'components/ContactDetails',
  component: ContactDetailsComponent,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<ContactDetailsComponent> = (args: ContactDetailsComponent) => ({
  props: args,
});
