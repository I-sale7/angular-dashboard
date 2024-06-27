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
import { HeaderComponent } from './header/header.component';
import { LiveEventsComponent } from './live-events/live-events.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DistributionComponent } from './distribution/distribution.component';
import { LiveWorkersComponent } from './live-workers/live-workers.component';
import { NgxWeatherModule } from 'ngx-weather';

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
    SideMenuComponent,
    HeaderComponent,
    LiveEventsComponent,
    DistributionComponent,
    LiveWorkersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    NgxWeatherModule.forRoot({
      apiKey: '7b4e9f07e0f94e358f394442242706'
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
