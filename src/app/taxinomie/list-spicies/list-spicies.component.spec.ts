import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpiciesComponent } from './list-spicies.component';

describe('ListSpiciesComponent', () => {
  let component: ListSpiciesComponent;
  let fixture: ComponentFixture<ListSpiciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSpiciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpiciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
