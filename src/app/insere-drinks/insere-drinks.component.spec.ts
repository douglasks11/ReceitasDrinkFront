import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsereDrinksComponent } from './insere-drinks.component';

describe('InsereDrinksComponent', () => {
  let component: InsereDrinksComponent;
  let fixture: ComponentFixture<InsereDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsereDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsereDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
