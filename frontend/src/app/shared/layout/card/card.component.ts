import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  template: ` <div class="card">
    <div class="card-body">
      @if (title) {
        <h5 data-cy="card-title" class="card-title">{{ title }}</h5>
      }
      <div data-cy="card-content" #ref>
        <ng-content />
      </div>
      @if (ref.childNodes.length === 0) {
        <p data-cy="card-text" class="card-text">No content</p>
      }
      @if (routerLink && routerLinkText) {
        <a data-cy="card-action" [routerLink]="routerLink" class="btn btn-primary">{{ routerLinkText }}</a>
      }
    </div>
  </div>`,
  styles: ``,
})
export class CardComponent {
  @Input() title?: string;
  @Input() routerLink?: string;
  @Input() routerLinkText?: string;
}
