import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageCreateComponent } from './beverage-create.component';

describe('BeverageCreateComponent', () => {
  let component: BeverageCreateComponent;
  let fixture: ComponentFixture<BeverageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeverageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeverageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
