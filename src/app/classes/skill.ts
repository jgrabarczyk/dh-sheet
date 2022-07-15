import { Treshold } from './threshold';

export class Skill {
  private baseValue_ = 0;
  private treshold = new Treshold(3, 10);
  private proficiencyValue!: number;
  private value_!: number;

  name!: string;
  proficiency: boolean = false;
  get value() {
    return this.value_;
  }

  get currentTreshold() {
    return this.treshold.current;
  }

  get isIncrementDisabled() {
    return this.treshold.isIncrementDisabled;
  }

  get isDecrementDisabled() {
    return this.treshold.isDecrementDisabled && !this.proficiency;
  }

  constructor(name: string, value: number) {
    this.name = name;
    this.baseValue_ = value;
    this.updateValue();
  }

  icrementThreshold(): void {
    if (this.proficiency) {
      this.treshold.incrementTreshold();
    } else {
      this.proficiency = true;
    }
    this.updateValue();
  }

  decrementTreshold(): void {
    if (!this.proficiency) {
      throw Error('unable to decrement treshold');
    }
    if (this.proficiency && this.treshold.current === 0) {
      this.proficiency = false;
    } else {
      this.treshold.decrementTreshold();
    }
    this.updateValue();
  }

  private updateValue() {
    this.updateProficiencyValue();

    const tempVal =
      this.baseValue_ +
      this.treshold.current * this.treshold.incrementBy +
      this.proficiencyValue;

    this.value_ = tempVal <= 0 ? 1 : tempVal;
  }

  private updateProficiencyValue() {
    this.proficiencyValue = this.proficiency ? 0 : -20;
  }
}
