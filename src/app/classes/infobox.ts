export class Infobox {
  name: string;
  value: number;
  type!: 'horizontal' | 'vertical';

  constructor(name: string, value: number, type?: 'horizontal' | 'vertical') {
    this.name = name;
    this.value = value;
    this.type = type ?? 'horizontal';
  }
}
