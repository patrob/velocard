import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListComponent } from './expense-list.component';
import { render } from '@testing-library/angular';
import { MockComponents } from 'ng-mocks';
import { CurrencyPipe } from '@angular/common';
import { CardComponent } from '../../../shared/layout/card/card.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListAddComponent } from './expense-list-add/expense-list-add.component';
import { ExpenseListItemComponent } from './expense-list-item/expense-list-item.component';
import { ExpenseListRowComponent } from './expense-list-row/expense-list-row.component';
import { ExpenseListTotalsComponent } from './expense-list-totals/expense-list-totals.component';

describe('ExpenseListComponent', () => {
  const setup = async () => {
    return await render(ExpenseListComponent, {
      imports: [
        MockComponents(
          CardComponent,
          ExpenseFormComponent,
          ExpenseListItemComponent,
          ExpenseListAddComponent,
          ExpenseListTotalsComponent,
          ExpenseListRowComponent
        ),
        CurrencyPipe,
      ],
    });
  };

  test('should render the card', async () => {
    const { getByTestId } = await setup();
    expect(getByTestId('expense-list')).toBeInTheDocument();
  });
});
