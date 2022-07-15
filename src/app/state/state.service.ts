import { Injectable } from '@angular/core';
import { Attribute } from '../classes/attribute';
import { Skill } from '../classes/skill';
import { State } from '../classes/state.class';
import { WeaponDto } from '../models/weapon.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  attributesState = new State<Attribute[]>();
  skillState = new State<Skill[]>();
  weaponsState = new State<WeaponDto[]>();
  constructor() {}
}
