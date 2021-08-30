import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaxinomieComponent } from './list-taxinomie.component';

describe('ListTaxinomieComponent', () => {
  let component: ListTaxinomieComponent;
  let fixture: ComponentFixture<ListTaxinomieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTaxinomieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaxinomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
