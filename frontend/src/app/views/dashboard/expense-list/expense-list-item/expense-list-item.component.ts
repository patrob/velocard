import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expense, ExpenseType } from '../expense-store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-expense-list-item',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="d-flex flex-row justify-content-between align-content-center">
      <div data-cy="expense-title" class="m-1 align-content-center">Expense: {{ expense.title }}</div>
      <div data-cy="expense-amount" class="m-1 align-content-center">Amount: {{ expense.amount | currency }}</div>
      <div class="form-check m-1 align-content-center">
        <label class="form-check-label" for="expense-type-{{ expense.id }}">Chargeable</label>
        <input
          data-cy="expense-type"
          disabled
          class="form-check-input"
          type="checkbox"
          id="expense-type-{{ expense.id }}"
          name="expense-type-{{ expense.id }}"
          [checked]="isChargeable"
        />
      </div>
      <div class="d-flex flex-row justify-content-end m-1 align-content-center">
        <a data-cy="edit" class="btn btn-outline-primary m-1" (click)="beginEditing.emit(expense.id)"
          ><i class="bi bi-pencil"></i
        ></a>
        <a data-cy="delete" class="btn btn-outline-danger m-1" (click)="removeExpense.emit(expense.id)"
          ><i class="bi bi-trash"></i
        ></a>
      </div>
    </div>
  `,
  styles: ``,
})
export class ExpenseListItemComponent {
  @Input() expense: Expense = null!;
  @Output() beginEditing = new EventEmitter<number>();
  @Output() removeExpense = new EventEmitter<number>();
  get isChargeable(): boolean {
    return this.expense.type === ExpenseType.Chargeable;
  }
}
