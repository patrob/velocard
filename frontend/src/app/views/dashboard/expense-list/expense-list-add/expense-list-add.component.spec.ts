import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListAddComponent } from './expense-list-add.component';

describe('ExpenseListAddComponent', () => {
  let component: ExpenseListAddComponent;
  let fixture: ComponentFixture<ExpenseListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseListAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
