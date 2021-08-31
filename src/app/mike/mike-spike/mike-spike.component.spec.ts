import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikeSpikeComponent } from './mike-spike.component';

describe('MikeSpikeComponent', () => {
  let component: MikeSpikeComponent;
  let fixture: ComponentFixture<MikeSpikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MikeSpikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MikeSpikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
