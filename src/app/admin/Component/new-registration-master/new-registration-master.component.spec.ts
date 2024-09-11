import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationMasterComponent } from './new-registration-master.component';

describe('NewRegistrationMasterComponent', () => {
  let component: NewRegistrationMasterComponent;
  let fixture: ComponentFixture<NewRegistrationMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRegistrationMasterComponent]
    });
    fixture = TestBed.createComponent(NewRegistrationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
