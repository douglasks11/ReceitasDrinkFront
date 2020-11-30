import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaDrinksComponent } from './deleta-drinks.component';

describe('DeletaDrinksComponent', () => {
  let component: DeletaDrinksComponent;
  let fixture: ComponentFixture<DeletaDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletaDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
