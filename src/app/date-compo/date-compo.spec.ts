import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCompo } from './date-compo';

describe('DateCompo', () => {
  let component: DateCompo;
  let fixture: ComponentFixture<DateCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCompo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
