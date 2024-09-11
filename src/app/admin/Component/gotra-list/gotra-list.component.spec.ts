import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotraListComponent } from './gotra-list.component';

describe('GotraListComponent', () => {
  let component: GotraListComponent;
  let fixture: ComponentFixture<GotraListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotraListComponent]
    });
    fixture = TestBed.createComponent(GotraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
