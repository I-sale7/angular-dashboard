import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWizardComponent } from './weather-wizard.component';

describe('WeatherWizardComponent', () => {
  let component: WeatherWizardComponent;
  let fixture: ComponentFixture<WeatherWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherWizardComponent]
    });
    fixture = TestBed.createComponent(WeatherWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
