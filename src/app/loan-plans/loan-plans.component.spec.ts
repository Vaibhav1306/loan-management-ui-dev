import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPlansComponent } from './loan-plans.component';

describe('LoanPlansComponent', () => {
  let component: LoanPlansComponent;
  let fixture: ComponentFixture<LoanPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
