import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListRowComponent } from './expense-list-row.component';
import { render } from '@testing-library/angular';
import { MockComponents } from 'ng-mocks';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { ExpenseListItemComponent } from '../expense-list-item/expense-list-item.component';
import { Expense, ExpenseType } from '../expense-store';

describe('ExpenseListRowComponent', () => {
  const baseExpense: Expense = {
    id: 1,
    title: 'Test',
    amount: 100,
    type: ExpenseType.Chargeable,
    isEditing: false,
  };
  const setup = async (inputs: Partial<ExpenseListRowComponent> = {}) => {
    return await render(ExpenseListRowComponent, {
      inputs,
      imports: [MockComponents(ExpenseFormComponent, ExpenseListItemComponent)],
    });
  };

  test('should render the list item', async () => {
    const expense = { ...baseExpense, isEditing: false };
    const { getByTestId } = await setup({ expense });
    expect(getByTestId('expense-list-item')).toBeInTheDocument();
  });

  test('should render the edit form', async () => {
    const expense = { ...baseExpense, isEditing: true };
    const { getByTestId } = await setup({ expense });
    expect(getByTestId('expense-form')).toBeInTheDocument();
  });
});
