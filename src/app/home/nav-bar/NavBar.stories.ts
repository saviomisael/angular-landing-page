import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ActiveRouteComponent } from '../active-route/active-route.component';
import { NavTopComponent } from '../nav-top/nav-top.component';

import { NavBarComponent } from './nav-bar.component';

export default {
  title: 'components/NavBar',
  component: NavBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavTopComponent, ActiveRouteComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const Default: Story<NavBarComponent> = (args: NavBarComponent) => ({
  props: args,
});
