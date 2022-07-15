import { Component, Input, OnInit } from '@angular/core';
import { WeaponDto } from 'src/app/models/weapon.model';

@Component({
  selector: 'dhcs-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent implements OnInit {
  @Input() weapon!: WeaponDto;
  titles = {
    name: 'nazwa',
    class: 'klasa',
    range: 'zasięg',
    rateOfFire: 'szybkostrzelność',
    damage: 'obrażenia',
    penetration: 'penetracja',
    clip: 'magazynek',
    reload: 'ładowanie',
    weight: 'waga',
    craftsmanship: 'dostępność',
  };
  constructor() {}

  ngOnInit() {}
}
