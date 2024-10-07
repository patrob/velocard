import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-list-totals',
  standalone: true,
  imports: [CurrencyPipe],
  template: `<li class="list-group-item">
      <div>Total {{ totalExpense | currency }}</div>
    </li>
    <li class="list-group-item">
      <div>Total Chargeable {{ totalChargeableExpense | currency }}</div>
    </li>
    <li class="list-group-item">
      <div>Total Non-Chargeable {{ totalNonChargeableExpense | currency }}</div>
    </li>`,
  styles: [],
})
export class ExpenseListTotalsComponent {
  @Input() totalExpense: number = 0;
  @Input() totalChargeableExpense: number = 0;
  @Input() totalNonChargeableExpense: number = 0;
  constructor() {}
}
