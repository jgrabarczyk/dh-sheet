import { Component, OnInit } from '@angular/core';
import { Infobox } from 'src/app/classes/infobox';

@Component({
  selector: 'dhcs-exp-bar',
  templateUrl: './exp-bar.component.html',
  styleUrls: ['./exp-bar.component.scss'],
})
export class ExpBarComponent implements OnInit {
  experienceToSpend = new Infobox('PD do wydania', 0);
  experienceSpent = new Infobox('Pd wydane', 0);
  constructor() {}

  ngOnInit(): void {}
}
