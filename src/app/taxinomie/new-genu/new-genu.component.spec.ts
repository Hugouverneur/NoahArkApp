import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGenuComponent } from './new-genu.component';

describe('NewGenuComponent', () => {
  let component: NewGenuComponent;
  let fixture: ComponentFixture<NewGenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
