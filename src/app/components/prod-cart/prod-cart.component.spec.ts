import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCartComponent } from './prod-cart.component';

describe('ProdCartComponent', () => {
  let component: ProdCartComponent;
  let fixture: ComponentFixture<ProdCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
