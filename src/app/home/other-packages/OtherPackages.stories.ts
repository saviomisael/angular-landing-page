import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';

import { OtherPackageService } from '../shared/services/other-package.service';

import { OtherPackagesComponent } from './other-packages.component';
import { StarsBoxComponent } from '../stars-box/stars-box.component';

export default {
  title: 'components/OtherPackages',
  component: OtherPackagesComponent,
  decorators: [
    moduleMetadata({
      declarations: [StarsBoxComponent],
      imports: [HttpClientModule],
      providers: [OtherPackageService],
    }),
  ],
} as Meta;

export const Default: Story<OtherPackagesComponent> = (args: OtherPackagesComponent) => ({
  props: args,
});
