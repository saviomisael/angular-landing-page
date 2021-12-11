import { Meta, Story } from '@storybook/angular';

import { NewsletterSectionComponent } from './newsletter-section.component';

export default {
  title: 'components/NeswletterSection',
  component: NewsletterSectionComponent,
} as Meta;

export const Default: Story<NewsletterSectionComponent> = (args: NewsletterSectionComponent) => ({
  props: args,
});
