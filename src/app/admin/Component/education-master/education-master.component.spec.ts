import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationMasterComponent } from './education-master.component';

describe('EducationMasterComponent', () => {
  let component: EducationMasterComponent;
  let fixture: ComponentFixture<EducationMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationMasterComponent]
    });
    fixture = TestBed.createComponent(EducationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
