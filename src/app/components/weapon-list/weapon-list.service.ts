import { Injectable } from '@angular/core';
import { WeaponsApiService } from 'src/app/http/weapons-api.service';
import { StateService } from 'src/app/state/state.service';

@Injectable({
  providedIn: 'root',
})
export class WeaponListService {
  get weapons$() {
    return this.stateService.weaponsState.observable;
  }
  constructor(
    private weaponsApi: WeaponsApiService,
    private stateService: StateService
  ) {}

  loadWeapons() {
    this.weaponsApi.getAll().subscribe((weapons) => {
      this.stateService.weaponsState.set(weapons.response);
    });
  }

  // private parseweapons = (atributes: HttpResponse<AttributeDto[]>) =>
  //   atributes.response.map(
  //     (attribute) =>
  //       new Weapon({
  //         ...attribute,
  //         value: 35,
  //       })
  //   );
}
