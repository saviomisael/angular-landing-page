import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';

import { OtherPackageService } from '../shared/services/other-package.service';

import { OtherPackagesComponent } from './other-packages.component';

export default {
  title: 'components/OtherPackages',
  component: OtherPackagesComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
      providers: [OtherPackageService],
    }),
  ],
} as Meta;

export const Default: Story<OtherPackagesComponent> = (args: OtherPackagesComponent) => ({
  props: args,
});
