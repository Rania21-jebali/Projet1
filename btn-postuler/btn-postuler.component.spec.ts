import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPostulerComponent } from './btn-postuler.component';

describe('BtnPostulerComponent', () => {
  let component: BtnPostulerComponent;
  let fixture: ComponentFixture<BtnPostulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnPostulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
