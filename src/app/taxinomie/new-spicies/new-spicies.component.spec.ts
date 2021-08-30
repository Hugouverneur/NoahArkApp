import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpiciesComponent } from './new-spicies.component';

describe('NewSpiciesComponent', () => {
  let component: NewSpiciesComponent;
  let fixture: ComponentFixture<NewSpiciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpiciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpiciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
