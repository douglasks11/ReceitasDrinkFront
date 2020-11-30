import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaDrinksComponent } from './atualiza-drinks.component';

describe('AtualizaDrinksComponent', () => {
  let component: AtualizaDrinksComponent;
  let fixture: ComponentFixture<AtualizaDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
