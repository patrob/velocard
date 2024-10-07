import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expense } from '../expense-store';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';

@Component({
  selector: 'app-expense-list-add',
  standalone: true,
  imports: [ExpenseFormComponent],
  template: `
    @if (isAdding) {
      <li class="list-group-item">
        <app-expense-form (addExpense)="addExpense.emit($event)" (cancel)="cancel.emit()"></app-expense-form>
      </li>
    } @else {
      <li class="list-group-item d-flex flex-row justify-content-end">
        <a class="btn btn-outline-primary m-1" (click)="beginAdding.emit()"><i class="bi bi-plus-circle"></i></a>
      </li>
    }
  `,
  styles: ``,
})
export class ExpenseListAddComponent {
  @Input() isAdding: boolean = false;
  @Output() beginAdding = new EventEmitter<void>();
  @Output() addExpense = new EventEmitter<Expense>();
  @Output() cancel = new EventEmitter<void>();
}
