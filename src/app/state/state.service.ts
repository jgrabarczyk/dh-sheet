import { Injectable } from '@angular/core';
import { Attribute } from '../classes/attribute';
import { Skill } from '../classes/skill';
import { State } from '../classes/state.class';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  attributesState = new State<Attribute[]>();
  skillState = new State<Skill[]>();

  constructor() {
    setInterval(() => {
      console.log(this.skillState);
    }, 5000);
  }
}
