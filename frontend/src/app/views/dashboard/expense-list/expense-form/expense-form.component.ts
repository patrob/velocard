import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Expense, ExpenseType } from '../expense-store';
import { tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="form-group d-flex flex-row justify-content-between" [formGroup]="form">
      <div class="input-group flex-nowrap expense-title m-1">
        <span class="input-group-text" id="expense-title-{{ expense?.id ?? 0 }}">Title</span>
        <input
          type="text"
          class="form-control"
          formControlName="title"
          placeholder="New Expense"
          aria-label="Expense Title"
        />
      </div>
      <div class="input-group flex-nowrap expense-amount m-1">
        <span class="input-group-text" id="expense-amount-{{ expense?.id ?? 0 }}">$</span>
        <input type="number" class="form-control" formControlName="amount" placeholder="Amount" aria-label="Amount" />
      </div>
      <div class="input-group flex-nowrap expense-type m-1">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            formControlName="type"
            value=""
            aria-label="Chargeable?"
          />
        </div>
        <span class="input-group-text" id="expense-type-{{ expense?.id ?? 0 }}">Chargeable?</span>
      </div>
      <div class="d-flex flex-row justify-content-end expense-actions">
        <a class="btn btn-outline-primary m-1" (click)="saveExpense()" aria-label="Save"
          ><i class="bi bi-floppy"></i
        ></a>
        <a class="btn btn-outline-secondary m-1" (click)="cancel.emit()" aria-label="Cancel"
          ><i class="bi bi-x-circle"></i
        ></a>
      </div>
    </div>
  `,
  styles: `
    input {
      .expense-title {
        max-width: 20rem;
      }
      .expense-type {
        max-width: 18rem;
      }
      .expense-amount {
        max-width: 12rem;
      }
    }
    .expense-actions {
      min-width: 10rem;
    }
  `,
})
export class ExpenseFormComponent implements OnInit {
  @Input() expense?: Expense;
  @Output() addExpense = new EventEmitter<Expense>();
  @Output() updateExpense = new EventEmitter<Expense>();
  @Output() cancel = new EventEmitter<void>();
  readonly expensetypeOptions = [
    { value: ExpenseType.NonChargeable, label: 'Non-Chargeable' },
    { value: ExpenseType.Chargeable, label: 'Chargeable' },
  ];
  form = new FormGroup({
    title: new FormControl<string>(this.expense?.title ?? '', Validators.required),
    amount: new FormControl<number>(this.expense?.amount ?? 0, [Validators.required, Validators.min(0)]),
    type: new FormControl<boolean>((this.expense?.type ?? ExpenseType.NonChargeable) === ExpenseType.Chargeable),
  });

  get formAsExpense(): Expense {
    return {
      id: this.expense?.id ?? 0,
      title: this.form.controls.title.value ?? '',
      amount: this.form.controls.amount.value ?? 0,
      type: this.form.controls.type.value ? ExpenseType.Chargeable : ExpenseType.NonChargeable,
      isEditing: false,
    };
  }

  ngOnInit(): void {
    this.form.setValue({
      title: this.expense?.title ?? '',
      amount: this.expense?.amount ?? 0,
      type: (this.expense?.type ?? ExpenseType.NonChargeable) === ExpenseType.Chargeable,
    });
  }

  saveExpense = () => {
    if (!this.form.valid) {
      return;
    }

    if (this.formAsExpense.id === 0) {
      this.addExpense.emit(this.formAsExpense);
      return;
    }
    this.updateExpense.emit(this.formAsExpense);
  };
}
