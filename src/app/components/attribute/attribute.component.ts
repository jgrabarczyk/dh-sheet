import { Component, Input } from '@angular/core';
import { Attribute } from 'src/app/classes/attribute';

@Component({
  selector: 'dhcs-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent {
  @Input() attribute!: Attribute;

  increment(): void {
    this.attribute.icrementThreshold();
  }

  decrement(): void {
    this.attribute.decrementTreshold();
  }
}
