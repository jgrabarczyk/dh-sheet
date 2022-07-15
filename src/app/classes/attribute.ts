import { AttributeDto } from '../models/attribute.model';
import { Treshold } from './threshold';

export class Attribute {
  private baseValue_ = 0;
  private treshold = new Treshold(5, 5);

  get value() {
    return this.baseValue_ + this.treshold.current * this.treshold.incrementBy;
  }

  get currentTreshold() {
    return this.treshold.current;
  }

  get isIncrementDisabled() {
    return this.treshold.isIncrementDisabled;
  }

  get isDecrementDisabled() {
    return this.treshold.isDecrementDisabled;
  }

  name!: string;
  shortName!: string;

  constructor(obj: AttributeDto) {
    this.name = obj.name;
    this.baseValue_ = obj.value;
    this.shortName = obj.shortName;
  }

  updateBaseValue(val: number) {
    if (val < 0) {
      throw Error('val can not be less than 0');
    }
    this.baseValue_ = val;
  }

  icrementThreshold(): void {
    this.treshold.incrementTreshold();
  }

  decrementTreshold(): void {
    this.treshold.decrementTreshold();
  }
}
