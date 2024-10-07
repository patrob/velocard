import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { render } from '@testing-library/angular';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { MockComponent } from 'ng-mocks';
import { CardComponent } from '../../shared/layout/card/card.component';

describe('DashboardComponent', () => {
  const setup = async () => {
    return await render(DashboardComponent, {
      imports: [MockComponent(ExpenseListComponent), CardComponent],
    });
  };

  test('should render the card', async () => {
    const { getByTestId } = await setup();
    expect(getByTestId('card-title')).toHaveTextContent('Expenses');
  });
});
