import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Attribute } from 'src/app/classes/attribute';
import { AtributeListService } from './atribute-list.service';

@Component({
  selector: 'dhcs-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.scss'],
})
export class AttributeListComponent implements OnInit {
  attributes$!: Observable<Attribute[] | null>;
  constructor(private atributeListService: AtributeListService) {}

  ngOnInit(): void {
    this.atributeListService.loadAttributes();
    this.attributes$ = this.atributeListService.attributes$;
  }
}
