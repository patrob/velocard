import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expense } from '../expense-store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-expense-list-item',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="container row">
      <div class="col-3 my-1">Expense: {{ expense.title }}</div>
      <div class="col-3 my-1">Amount: {{ expense.amount | currency }}</div>
      <div class="col-6">
        <a class="btn btn-outline-primary" (click)="beginEditing.emit(expense.id)"><i class="bi bi-pencil"></i></a>
        <a class="btn btn-outline-danger" (click)="removeExpense.emit(expense.id)"><i class="bi bi-trash"></i></a>
      </div>
    </div>
  `,
  styles: ``,
})
export class ExpenseListItemComponent {
  @Input() expense: Expense = null!;
  @Output() beginEditing = new EventEmitter<number>();
  @Output() removeExpense = new EventEmitter<number>();
}
