import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListItemComponent } from './expense-list-item.component';

describe('ExpenseListItemComponent', () => {
  let component: ExpenseListItemComponent;
  let fixture: ComponentFixture<ExpenseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
