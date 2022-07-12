import { BehaviorSubject, Observable } from 'rxjs';
import { ErrorDto } from '../models/error.model';

export class State<T> {
  private bsubject = new BehaviorSubject<T | null>(null);
  private initialValue: T | null;

  public observable: Observable<T | null> = this.bsubject.asObservable();

  constructor(initialValue?: T) {
    this.initialValue = initialValue ?? null;
    this.reset();
  }

  get value(): T {
    if (this.bsubject.value === undefined || this.bsubject.value === null) {
      throw Error('State<T>: this.bsubject.value is missing');
    }
    return this.bsubject.value;
  }

  updateObject(newVal: Partial<T>): void {
    if (typeof newVal !== 'object' || Array.isArray(newVal)) {
      throw Error('The updated value must be an object');
    }
    if (this.bsubject.value) {
      const valueToUpdate: T | null = {
        ...this.bsubject.value,
        ...newVal,
      };
      this.bsubject.next(valueToUpdate);
    } else {
      throw Error('current value is null');
    }
  }

  set(newVal: T) {
    this.bsubject.next(newVal);
  }

  reset(): void {
    this.bsubject.next(this.initialValue);
  }
}

export class StateError extends Error {
  errors: ErrorDto[];
  constructor(errors: ErrorDto[]) {
    super('State failed!');
    this.errors = errors;
  }
}
