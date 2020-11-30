import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDrinksComponent } from './lista-drinks.component';

describe('ListaDrinksComponent', () => {
  let component: ListaDrinksComponent;
  let fixture: ComponentFixture<ListaDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
