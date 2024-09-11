import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryMasterComponent } from './enquiry-master.component';

describe('EnquiryMasterComponent', () => {
  let component: EnquiryMasterComponent;
  let fixture: ComponentFixture<EnquiryMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiryMasterComponent]
    });
    fixture = TestBed.createComponent(EnquiryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
