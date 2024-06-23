import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { EventsComponent } from './events/events.component';
import { DevicesComponent } from './devices/devices.component';
import { DomainComponent } from './domain/domain.component';
import { SettingsComponent } from './settings/settings.component';
import { CardComponent } from './card/card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RealtimeComponent,
    EventsComponent,
    DevicesComponent,
    DomainComponent,
    SettingsComponent,
    CardComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
