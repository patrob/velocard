import { computed } from '@angular/core';
import { signalStore, withMethods, withState, patchState, withComputed } from '@ngrx/signals';

export enum ExpenseType {
  NonChargeable,
  Chargeable,
}

export interface Expense {
  id: number;
  title: string;
  amount: number;
  type: ExpenseType;
  isEditing: boolean;
}

export interface ExpenseState {
  expenses: Expense[];
  isAdding: boolean;
}

export const initialExpenseState: ExpenseState = {
  expenses: [],
  isAdding: false,
};

export const ExpenseStore = signalStore(
  withState(initialExpenseState),
  withComputed((state) => ({
    totalExpense: computed(() => state.expenses().reduce((acc, expense) => acc + expense.amount, 0)),
    totalChargeableExpense: computed(() =>
      state
        .expenses()
        .filter((e) => e.type === ExpenseType.Chargeable)
        .reduce((acc, expense) => acc + expense.amount, 0)
    ),
    totalNonChargeableExpense: computed(() =>
      state
        .expenses()
        .filter((e) => e.type === ExpenseType.NonChargeable)
        .reduce((acc, expense) => acc + expense.amount, 0)
    ),
  })),
  withMethods((store) => ({
    beginEditing(id: number): void {
      patchState(store, (state) => ({
        ...state,
        expenses: state.expenses.map((expense) => (expense.id === id ? { ...expense, isEditing: true } : expense)),
      }));
    },
    cancelEdit(id: number): void {
      patchState(store, (state) => ({
        ...state,
        expenses: state.expenses.map((expense) => (expense.id === id ? { ...expense, isEditing: false } : expense)),
      }));
    },
    beginAdding(): void {
      patchState(store, (state) => ({
        ...state,
        isAdding: true,
      }));
    },
    cancelAdd(): void {
      patchState(store, (state) => ({
        ...state,
        isAdding: false,
      }));
    },
    addExpense(expense: Expense): void {
      patchState(store, (state) => ({
        ...state,
        expenses: [...state.expenses, { ...expense, id: Math.max(0, ...state.expenses.map((e) => e.id)) + 1 }],
        isAdding: false,
      }));
    },
    updateExpense(expense: Expense): void {
      patchState(store, (state) => ({
        ...state,
        expenses: state.expenses.map((e) => (e.id === expense.id ? { ...expense, isEditing: false } : e)),
      }));
    },
    removeExpense(id: number): void {
      patchState(store, (state) => ({
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }))
);
