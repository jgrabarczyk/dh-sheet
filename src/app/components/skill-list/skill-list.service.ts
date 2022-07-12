import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Skill } from 'src/app/classes/skill';
import { SkillListApiService } from 'src/app/http/skill-list-api.service';
import { HttpResponse } from 'src/app/models/http-response.model';
import { SkillDto } from 'src/app/models/skill.model';
import { StateService } from 'src/app/state/state.service';

@Injectable({
  providedIn: 'root',
})
export class SkillListService {
  get skills$() {
    return this.stateService.skillState.observable;
  }

  constructor(
    private skillsApi: SkillListApiService,
    private stateService: StateService
  ) {}

  loadSkills() {
    return this.skillsApi
      .getAll()
      .pipe(map(this.parseSkills))
      .subscribe((skills) => {
        this.stateService.skillState.set(skills);
      });
  }
  private parseSkills = (skills: HttpResponse<SkillDto[]>) =>
    skills.response.map((skill) => new Skill(skill.name, 35));
}
