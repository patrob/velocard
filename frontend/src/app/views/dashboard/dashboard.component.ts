import { Component } from '@angular/core';
import { CardComponent } from '../../shared/layout/card/card.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@Component({
  standalone: true,
  imports: [CardComponent, ExpenseListComponent],
  template: ` <app-card title="Expenses">
    <app-expense-list></app-expense-list>
  </app-card>`,
  styles: ``,
})
export class DashboardComponent {}
