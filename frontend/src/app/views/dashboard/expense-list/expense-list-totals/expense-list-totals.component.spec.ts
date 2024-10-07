import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListTotalsComponent } from './expense-list-totals.component';

describe('ExpenseListTotalsComponent', () => {
  let component: ExpenseListTotalsComponent;
  let fixture: ComponentFixture<ExpenseListTotalsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ExpenseListTotalsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseListTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
