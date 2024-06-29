import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, SideMenuComponent],
})
export class LayoutModule {}
