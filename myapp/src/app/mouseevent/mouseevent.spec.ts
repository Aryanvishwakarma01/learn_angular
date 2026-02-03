import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mouseevent } from './mouseevent';

describe('Mouseevent', () => {
  let component: Mouseevent;
  let fixture: ComponentFixture<Mouseevent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mouseevent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mouseevent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
