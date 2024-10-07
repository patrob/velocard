import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListTotalsComponent } from './expense-list-totals.component';
import { render } from '@testing-library/angular';

describe('ExpenseListTotalsComponent', () => {
  const setup = async (inputs: Partial<ExpenseListTotalsComponent> = {}) => {
    return await render(ExpenseListTotalsComponent, {
      inputs,
    });
  };

  test('should render the total amount', async () => {
    const totalExpense = 100;
    const { getByTestId } = await setup({ totalExpense });
    expect(getByTestId('total-amount')).toHaveTextContent(`$${totalExpense.toString()}.00`);
  });
  test('should render the total chargeable amount', async () => {
    const totalChargeableExpense = 100;
    const { getByTestId } = await setup({ totalChargeableExpense });
    expect(getByTestId('total-chargeable-amount')).toHaveTextContent(`$${totalChargeableExpense.toString()}.00`);
  });
  test('should render the total non-chargeable amount', async () => {
    const totalNonChargeableExpense = 100;
    const { getByTestId } = await setup({ totalNonChargeableExpense });
    expect(getByTestId('total-nonchargeable-amount')).toHaveTextContent(`$${totalNonChargeableExpense.toString()}.00`);
  });
});
