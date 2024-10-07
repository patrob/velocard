import { Component, inject } from '@angular/core';
import { Expense, ExpenseStore, ExpenseType } from './expense-store';
import { CardComponent } from '../../../shared/layout/card/card.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { ExpenseListItemComponent } from './expense-list-item/expense-list-item.component';
import { ExpenseListTotalsComponent } from './expense-list-totals/expense-list-totals.component';
import { ExpenseListRowComponent } from './expense-list-row/expense-list-row.component';
import { ExpenseListAddComponent } from './expense-list-add/expense-list-add.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [
    CardComponent,
    ExpenseFormComponent,
    ExpenseListItemComponent,
    ExpenseListAddComponent,
    CurrencyPipe,
    ExpenseListTotalsComponent,
    ExpenseListRowComponent,
  ],
  template: `
    <ul class="list-group">
      @for (expense of expenses(); track expense.id) {
        <li class="list-group-item" id="expense-list-item-{{ expense.id }}">
          <app-expense-list-row
            attr.data-cy="expense-list-row-{{ expense.id }}"
            [expense]="expense"
            (beginEditing)="beginEditing($event)"
            (removeExpense)="removeExpense($event)"
            (cancel)="cancelEdit($event)"
            (updateExpense)="updateExpense($event)"
          />
        </li>
      }
      <app-expense-list-add
        data-cy="expense-list-add"
        [isAdding]="expenseStore.isAdding()"
        (beginAdding)="beginAdding()"
        (addExpense)="addExpense($event)"
        (cancel)="cancelAdd()"
      />
      <app-expense-list-totals
        data-cy="expense-list-totals"
        [totalExpense]="expenseStore.totalExpense()"
        [totalChargeableExpense]="expenseStore.totalChargeableExpense()"
        [totalNonChargeableExpense]="expenseStore.totalNonChargeableExpense()"
      />
    </ul>
  `,
  styles: ``,
  providers: [ExpenseStore],
})
export class ExpenseListComponent {
  readonly expenseStore = inject(ExpenseStore);
  expenses = this.expenseStore.expenses;

  beginAdding = () => this.expenseStore.beginAdding();
  cancelAdd = () => this.expenseStore.cancelAdd();
  addExpense = (expense: Expense) => {
    console.log('Adding expense:', expense);
    this.expenseStore.addExpense(expense);
  };
  beginEditing = (id: number) => this.expenseStore.beginEditing(id);
  updateExpense = (expense: Expense) => this.expenseStore.updateExpense(expense);
  cancelEdit = (id: number) => this.expenseStore.cancelEdit(id);
  removeExpense = (id: number) => this.expenseStore.removeExpense(id);
}
