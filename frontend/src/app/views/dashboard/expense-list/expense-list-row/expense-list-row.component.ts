import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { ExpenseListItemComponent } from '../expense-list-item/expense-list-item.component';
import { Expense } from '../expense-store';

@Component({
  selector: 'app-expense-list-row',
  standalone: true,
  imports: [ExpenseFormComponent, ExpenseListItemComponent],
  template: `
    @if (expense.isEditing) {
      <app-expense-form
        data-cy="expense-form"
        [expense]="expense"
        (updateExpense)="updateExpense.emit($event)"
        (cancel)="cancel.emit(expense.id)"
      ></app-expense-form>
    } @else {
      <app-expense-list-item
        data-cy="expense-list-item"
        [expense]="expense"
        (beginEditing)="beginEditing.emit($event)"
        (removeExpense)="removeExpense.emit($event)"
      />
    }
  `,
  styles: ``,
})
export class ExpenseListRowComponent {
  @Input() expense: Expense = null!;
  @Output() beginEditing = new EventEmitter<number>();
  @Output() removeExpense = new EventEmitter<number>();
  @Output() cancel = new EventEmitter<number>();
  @Output() updateExpense = new EventEmitter<Expense>();
}
