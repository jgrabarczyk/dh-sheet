import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/classes/skill';
import { SkillListService } from './skill-list.service';

@Component({
  selector: 'dhcs-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
  skills$!: Observable<Skill[] | null>;
  constructor(private skillListService: SkillListService) {}

  ngOnInit(): void {
    this.skillListService.loadSkills();
    this.skills$ = this.skillListService.skills$;
  }
}
