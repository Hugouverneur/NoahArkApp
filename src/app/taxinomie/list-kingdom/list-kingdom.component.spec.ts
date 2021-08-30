import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKingdomComponent } from './list-kingdom.component';

describe('ListKingdomComponent', () => {
  let component: ListKingdomComponent;
  let fixture: ComponentFixture<ListKingdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKingdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKingdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
