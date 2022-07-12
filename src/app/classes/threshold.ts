export class Treshold {
  current = 0;
  max!: number;
  incrementBy!: number;
  constructor(max: number, incrementBy: number) {
    this.max = max;
    this.incrementBy = incrementBy;
  }

  incrementTreshold() {
    if (this.current >= this.max) {
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
