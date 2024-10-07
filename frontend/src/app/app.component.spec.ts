import { TestBed } from '@angular/core/testing';
import { render, RenderResult, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MockComponent } from 'ng-mocks';

describe('AppComponent', () => {
  let renderResult: RenderResult<AppComponent>;
  beforeEach(async () => {
    renderResult = await render(AppComponent, {
      imports: [MockComponent(HeaderComponent)],
    });
  });

  test('should render the header', async () => {
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
  });
});
