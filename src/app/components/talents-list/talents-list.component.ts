import { Component, OnInit } from '@angular/core';
import { Talent } from 'src/app/classes/talent';

@Component({
  selector: 'dhcs-talents-list',
  templateUrl: './talents-list.component.html',
  styleUrls: ['./talents-list.component.scss'],
})
export class TalentsListComponent implements OnInit {
  talents: Talent[] = [];
  constructor() {}

  ngOnInit() {}

  addTalent() {
    this.talents.push(new Talent());
  }

  removeTalent(i: number) {
    if (i > -1) {
      this.talents.splice(i, 1);
    }
  }
}
