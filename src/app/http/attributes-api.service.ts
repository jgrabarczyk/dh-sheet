import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AttributeDto } from '../models/attribute.model';
import { HttpResponse } from '../models/http-response.model';

@Injectable({
  providedIn: 'root',
})
export class AttributesApiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<HttpResponse<AttributeDto[]>> {
    return this.http.get<HttpResponse<AttributeDto[]>>(
      `${environment.apiUrl}/attributes`
    );
  }
}
