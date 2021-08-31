import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldTwoComponent } from './hello-world-two.component';

describe('HelloWorldTwoComponent', () => {
  let component: HelloWorldTwoComponent;
  let fixture: ComponentFixture<HelloWorldTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
