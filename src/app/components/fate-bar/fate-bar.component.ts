import { Component, OnInit } from '@angular/core';
import { Infobox } from 'src/app/classes/infobox';

@Component({
  selector: 'dhcs-fate-bar',
  templateUrl: './fate-bar.component.html',
  styleUrls: ['./fate-bar.component.scss'],
})
export class FateBarComponent implements OnInit {
  fateTreshold = new Infobox('Próg', 0);
  fateCurrent = new Infobox('Obecnie', 0);
  constructor() {}

  ngOnInit() {}
}
