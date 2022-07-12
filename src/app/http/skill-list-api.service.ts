import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '../models/http-response.model';
import { SkillDto } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillListApiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<HttpResponse<SkillDto[]>> {
    return this.http.get<HttpResponse<SkillDto[]>>(
      `${environment.apiUrl}/skills`
    );
  }
}
