import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldOneComponent } from './hello-world-one.component';

describe('HelloWorldOneComponent', () => {
  let component: HelloWorldOneComponent;
  let fixture: ComponentFixture<HelloWorldOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
