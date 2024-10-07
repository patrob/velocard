import { Component, inject } from '@angular/core';
import { Expense, ExpenseStore, ExpenseType } from './expense-store';
import { CardComponent } from '../../../shared/layout/card/card.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { ExpenseListItemComponent } from './expense-list-item/expense-list-item.component';
import { ExpenseListTotalsComponent } from './expense-list-totals/expense-list-totals.component';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CardComponent, ExpenseFormComponent, ExpenseListItemComponent, CurrencyPipe, ExpenseListTotalsComponent],
  template: `
    <ul class="list-group">
      @for (expense of expenses(); track expense.id) {
        <li class="list-group-item" id="expense-list-item-{{ expense.id }}">
          @if (expense.isEditing) {
            <app-expense-form
              [expense]="expense"
              (updateExpense)="expenseStore.updateExpense($event)"
              (cancel)="expenseStore.cancelEdit(expense.id)"
            ></app-expense-form>
          } @else {
            <app-expense-list-item
              [expense]="expense"
              (beginEditing)="beginEditing($event)"
              (removeExpense)="expenseStore.removeExpense($event)"
            />
          }
        </li>
      }
      @if (expenseStore.isAdding()) {
        <li class="list-group-item">
          <app-expense-form (addExpense)="addExpense($event)"></app-expense-form>
        </li>
      } @else {
        <li class="list-group-item d-flex flex-row justify-content-end">
          <a class="btn btn-outline-primary" (click)="beginAdding()"><i class="bi bi-plus-circle"></i></a>
        </li>
      }
      <app-expense-list-totals
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
    console.log('addExpense', expense);
    this.expenseStore.addExpense(expense);
  };
  beginEditing = (id: number) => {
    console.log(
      'beginEditing',
      id,
      this.expenseStore.expenses().find((e) => e.id === id)
    );
    this.expenseStore.beginEditing(id);
  };
}
