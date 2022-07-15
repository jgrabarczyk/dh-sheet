import { Component, Input } from '@angular/core';
import { Attribute } from 'src/app/classes/attribute';

@Component({
  selector: 'dhcs-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent {
  @Input() attribute!: Attribute;

  get isIncrementDisabled() {
    return this.attribute.isIncrementDisabled;
  }
  get isDecrementDisabled() {
    return this.attribute.isDecrementDisabled;
  }

  increment(): void {
    this.attribute.icrementThreshold();
  }

  decrement(): void {
    this.attribute.decrementTreshold();
  }
}
