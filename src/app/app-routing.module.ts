import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { EventsComponent } from './events/events.component';
import { DevicesComponent } from './devices/devices.component';
import { DomainComponent } from './domain/domain.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'realtime', component: RealtimeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'domain', component: DomainComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }