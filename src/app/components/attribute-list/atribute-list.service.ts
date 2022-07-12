import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Attribute } from 'src/app/classes/attribute';
import { AttributesApiService } from 'src/app/http/attributes-api.service';
import { AttributeDto } from 'src/app/models/attribute.model';
import { HttpResponse } from 'src/app/models/http-response.model';
import { StateService } from 'src/app/state/state.service';

@Injectable({
  providedIn: 'root',
})
export class AtributeListService {
  get attributes$() {
    return this.stateService.attributesState.observable;
  }
  constructor(
    private attributesApi: AttributesApiService,
    private stateService: StateService
  ) {}

  loadAttributes() {
    this.attributesApi
      .getAll()
      .pipe(map(this.parseAttributes))
      .subscribe((attributes) => {
        this.stateService.attributesState.set(attributes);
      });
  }

  private parseAttributes = (atributes: HttpResponse<AttributeDto[]>) =>
    atributes.response.map(
      (attribute) =>
        new Attribute({
          ...attribute,
          value: 35,
        })
    );
}
