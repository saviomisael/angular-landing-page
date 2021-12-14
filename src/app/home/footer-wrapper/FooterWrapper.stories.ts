import { ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterBottomComponent } from '../footer-bottom/footer-bottom.component';

import { FooterWrapperComponent } from './footer-wrapper.component';

export default {
  title: 'components/FooterWrapper',
  component: FooterWrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [ContactDetailsComponent, ContactFormComponent, FooterBottomComponent],
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta;

export const Default: Story<FooterWrapperComponent> = (args: FooterWrapperComponent) => ({
  props: args,
});
