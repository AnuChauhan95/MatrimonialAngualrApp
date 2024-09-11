import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationMasterListComponent } from './new-registration-master-list.component';

describe('NewRegistrationMasterListComponent', () => {
  let component: NewRegistrationMasterListComponent;
  let fixture: ComponentFixture<NewRegistrationMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRegistrationMasterListComponent]
    });
    fixture = TestBed.createComponent(NewRegistrationMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
