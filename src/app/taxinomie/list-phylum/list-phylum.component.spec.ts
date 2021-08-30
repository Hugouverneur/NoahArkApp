import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhylumComponent } from './list-phylum.component';

describe('ListPhylumComponent', () => {
  let component: ListPhylumComponent;
  let fixture: ComponentFixture<ListPhylumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhylumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhylumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
