import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCasteListComponent } from './sub-caste-list.component';

describe('SubCasteListComponent', () => {
  let component: SubCasteListComponent;
  let fixture: ComponentFixture<SubCasteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCasteListComponent]
    });
    fixture = TestBed.createComponent(SubCasteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
