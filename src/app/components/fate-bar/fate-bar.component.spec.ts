/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FateBarComponent } from './fate-bar.component';

describe('FateBarComponent', () => {
  let component: FateBarComponent;
  let fixture: ComponentFixture<FateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
