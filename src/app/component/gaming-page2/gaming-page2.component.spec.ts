import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingPage2Component } from './gaming-page2.component';

describe('GamingPage2Component', () => {
  let component: GamingPage2Component;
  let fixture: ComponentFixture<GamingPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
