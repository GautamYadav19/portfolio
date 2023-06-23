import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpContactMeComponent } from './pop-up-contact-me.component';

describe('PopUpContactMeComponent', () => {
  let component: PopUpContactMeComponent;
  let fixture: ComponentFixture<PopUpContactMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpContactMeComponent]
    });
    fixture = TestBed.createComponent(PopUpContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
