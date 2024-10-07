import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListItemComponent } from './expense-list-item.component';
import { render } from '@testing-library/angular';
import { CurrencyPipe } from '@angular/common';
import { Expense, ExpenseType } from '../expense-store';

describe('ExpenseListItemComponent', () => {
  const baseExpense: Expense = {
    id: 1,
    title: 'Test',
    amount: 100,
    type: ExpenseType.Chargeable,
    isEditing: false,
  };
  const setup = async (inputs: Partial<ExpenseListItemComponent> = {}) => {
    return await render(ExpenseListItemComponent, {
      inputs,
      imports: [CurrencyPipe],
    });
  };

  test('should render the list item', async () => {
    const expense = { ...baseExpense };
    const { getByTestId } = await setup({ expense });
    expect(getByTestId('expense-title')).toHaveTextContent(expense.title);
    expect(getByTestId('expense-amount')).toHaveTextContent(expense.amount.toString());
    expect(getByTestId('expense-type')).toBeChecked();
    expect(getByTestId('edit')).toBeInTheDocument();
    expect(getByTestId('delete')).toBeInTheDocument();
  });
});
