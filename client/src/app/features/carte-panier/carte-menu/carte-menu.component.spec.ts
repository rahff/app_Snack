import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMenuComponent } from './carte-menu.component';

describe('CarteMenuComponent', () => {
  let component: CarteMenuComponent;
  let fixture: ComponentFixture<CarteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
