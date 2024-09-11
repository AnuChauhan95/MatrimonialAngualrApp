import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionMasterComponent } from './profession-master.component';

describe('ProfessionMasterComponent', () => {
  let component: ProfessionMasterComponent;
  let fixture: ComponentFixture<ProfessionMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionMasterComponent]
    });
    fixture = TestBed.createComponent(ProfessionMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
