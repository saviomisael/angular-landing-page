import { ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { ContactFormComponent } from './contact-form.component';

export default {
  title: 'components/ContactForm',
  component: ContactFormComponent,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta;

export const Default: Story<ContactFormComponent> = (args: ContactFormComponent) => ({
  props: args,
});
