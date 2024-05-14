import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImcComponent } from './dialog-imc.component';

describe('DialogImcComponent', () => {
  let component: DialogImcComponent;
  let fixture: ComponentFixture<DialogImcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogImcComponent]
    });
    fixture = TestBed.createComponent(DialogImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
