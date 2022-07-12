import { Component, Input, OnInit } from '@angular/core';
import { Infobox } from 'src/app/classes/infobox';

@Component({
  selector: 'dhcs-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss'],
})
export class InfoboxComponent implements OnInit {
  @Input() name!: string;
  @Input() value!: number;
  @Input() type: 'horizontal' | 'vertical' = 'horizontal';

  infobox!: Infobox;

  ngOnInit(): void {
    this.infobox = new Infobox(this.name, this.value);
  }
}
