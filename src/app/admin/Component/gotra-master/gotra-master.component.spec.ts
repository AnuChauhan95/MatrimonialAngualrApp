import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotraMasterComponent } from './gotra-master.component';

describe('GotraMasterComponent', () => {
  let component: GotraMasterComponent;
  let fixture: ComponentFixture<GotraMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotraMasterComponent]
    });
    fixture = TestBed.createComponent(GotraMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
