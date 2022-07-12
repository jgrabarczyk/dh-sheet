import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../classes/skill';

@Component({
  selector: 'dhcs-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() skill!: Skill;

  increment(): void {
    this.skill.icrementThreshold();
  }

  decrement(): void {
    this.skill.decrementTreshold();
  }
}
