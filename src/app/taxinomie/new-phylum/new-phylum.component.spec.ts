import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhylumComponent } from './new-phylum.component';

describe('NewPhylumComponent', () => {
  let component: NewPhylumComponent;
  let fixture: ComponentFixture<NewPhylumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPhylumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPhylumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
