import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '../models/http-response.model';
import { WeaponDto } from '../models/weapon.model';

@Injectable({
  providedIn: 'root',
})
export class WeaponsApiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<HttpResponse<WeaponDto[]>> {
    return this.http.get<HttpResponse<WeaponDto[]>>(
      `${environment.apiUrl}/weapons`
    );
  }
}
