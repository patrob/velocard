import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { render, RenderResult } from '@testing-library/angular';

describe('CardComponent', () => {
  const setup = async (inputs: Partial<CardComponent> = {}) => {
    return await render(CardComponent, {
      declarations: [],
      componentProperties: inputs,
    });
  };

  test('should render the title', async () => {
    const { getByTestId } = await setup({ title: 'Card Title' });
    expect(getByTestId('card-title')).toHaveTextContent('Card Title');
  });
});
