import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTreinosComponent } from './dialog-treinos.component';

describe('DialogTreinosComponent', () => {
  let component: DialogTreinosComponent;
  let fixture: ComponentFixture<DialogTreinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogTreinosComponent]
    });
    fixture = TestBed.createComponent(DialogTreinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
