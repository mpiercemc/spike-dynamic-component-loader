import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskControlComponent } from './risk-control.component';

describe('RiskControlComponent', () => {
  let component: RiskControlComponent;
  let fixture: ComponentFixture<RiskControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
