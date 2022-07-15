/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TalentsListComponent } from './talents-list.component';

describe('TalentsListComponent', () => {
  let component: TalentsListComponent;
  let fixture: ComponentFixture<TalentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
