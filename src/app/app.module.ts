import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LiveEventsComponent } from './features/live-events/live-events.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LiveWorkersComponent } from './features/live-workers/live-workers.component';
import { NgxWeatherModule } from 'ngx-weather';
import { WeatherWizardComponent } from './features/weather-wizard/weather-wizard.component';
import { DetailedChartsComponent } from './features/detailed-charts/detailed-charts.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveEventsComponent,
    LiveWorkersComponent,
    WeatherWizardComponent,
    DetailedChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    NgApexchartsModule,
    NgxWeatherModule.forRoot({
      apiKey: '7b4e9f07e0f94e358f394442242706',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
