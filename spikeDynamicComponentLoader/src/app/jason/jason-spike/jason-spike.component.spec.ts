import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasonSpikeComponent } from './jason-spike.component';

describe('JasonSpikeComponent', () => {
  let component: JasonSpikeComponent;
  let fixture: ComponentFixture<JasonSpikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasonSpikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JasonSpikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
