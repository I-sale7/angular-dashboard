import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWorkersComponent } from './live-workers.component';

describe('LiveWorkersComponent', () => {
  let component: LiveWorkersComponent;
  let fixture: ComponentFixture<LiveWorkersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveWorkersComponent]
    });
    fixture = TestBed.createComponent(LiveWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
