export class Treshold {
  current = 0;
  max!: number;
  incrementBy!: number;
  constructor(max: number, incrementBy: number) {
    this.max = max;
    this.incrementBy = incrementBy;
  }
  get isIncrementDisabled() {
    return this.current >= this.max;
  }

  get isDecrementDisabled() {
    return this.current <= 0;
  }

  incrementTreshold() {
    if (this.isIncrementDisabled) {
      throw Error('Threshold max value reached');
    }
    this.current += 1;
  }
  decrementTreshold() {
    if (this.current <= 0) {
      throw Error('Threshold min value reached');
    }
    this.current -= 1;
  }
}
