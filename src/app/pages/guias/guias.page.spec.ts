import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasPage } from './guias.page';

describe('GuiasPage', () => {
  let component: GuiasPage;
  let fixture: ComponentFixture<GuiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
