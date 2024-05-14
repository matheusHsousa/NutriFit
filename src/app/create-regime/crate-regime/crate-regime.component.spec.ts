import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateRegimeComponent } from './crate-regime.component';

describe('CrateRegimeComponent', () => {
  let component: CrateRegimeComponent;
  let fixture: ComponentFixture<CrateRegimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrateRegimeComponent]
    });
    fixture = TestBed.createComponent(CrateRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
