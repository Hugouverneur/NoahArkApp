import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGenuComponent } from './list-genu.component';

describe('ListGenuComponent', () => {
  let component: ListGenuComponent;
  let fixture: ComponentFixture<ListGenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
