import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExample } from './binding-example';

describe('BindingExample', () => {
  let component: BindingExample;
  let fixture: ComponentFixture<BindingExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
