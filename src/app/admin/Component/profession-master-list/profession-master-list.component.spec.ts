import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionMasterListComponent } from './profession-master-list.component';

describe('ProfessionMasterListComponent', () => {
  let component: ProfessionMasterListComponent;
  let fixture: ComponentFixture<ProfessionMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionMasterListComponent]
    });
    fixture = TestBed.createComponent(ProfessionMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
