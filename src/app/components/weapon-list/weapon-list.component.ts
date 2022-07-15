import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeaponDto } from 'src/app/models/weapon.model';
import { StateService } from 'src/app/state/state.service';
import { WeaponListService } from './weapon-list.service';

@Component({
  selector: 'dhcs-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss'],
})
export class WeaponListComponent implements OnInit {
  weapons$!: Observable<WeaponDto[] | null>;
  constructor(private weaponsListService: WeaponListService) {}

  ngOnInit() {
    this.weaponsListService.loadWeapons();
    this.weapons$ = this.weaponsListService.weapons$;
  }
}
