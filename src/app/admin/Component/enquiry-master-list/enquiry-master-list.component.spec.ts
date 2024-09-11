import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryMasterListComponent } from './enquiry-master-list.component';

describe('EnquiryMasterListComponent', () => {
  let component: EnquiryMasterListComponent;
  let fixture: ComponentFixture<EnquiryMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiryMasterListComponent]
    });
    fixture = TestBed.createComponent(EnquiryMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
