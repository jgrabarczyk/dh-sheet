import { Component, OnInit } from '@angular/core';
import {
  Aptitudes,
  AttributeAptitudes,
  BasicAptitudes,
} from 'src/app/models/aptitudes.enum';

@Component({
  selector: 'dhcs-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss'],
})
export class AptitudesComponent implements OnInit {
  aptitudes: Aptitudes[] = [];
  constructor() {}

  ngOnInit() {
    this.aptitudes = [
      BasicAptitudes.GENERAL,
      AttributeAptitudes.INTELIGENCE,
      BasicAptitudes.TECHNIQUE,
      BasicAptitudes.ERUDITION,
      BasicAptitudes.ADAPTATION,
      AttributeAptitudes.STRENGTH,
      BasicAptitudes.OFFENCE,
      AttributeAptitudes.TOUGHNESS,
    ];
  }
}
