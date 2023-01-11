import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedOrderMenusComponent } from './selected-order-menus.component';

describe('SelectedOrderMenusComponent', () => {
  let component: SelectedOrderMenusComponent;
  let fixture: ComponentFixture<SelectedOrderMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedOrderMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedOrderMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
