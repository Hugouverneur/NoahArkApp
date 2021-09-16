import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveLotComponent } from './move-lot.component';

describe('MoveLotComponent', () => {
  let component: MoveLotComponent;
  let fixture: ComponentFixture<MoveLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
