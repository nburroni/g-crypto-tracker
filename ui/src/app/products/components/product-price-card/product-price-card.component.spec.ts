import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceCardComponent } from './product-price-card.component';

describe('ProductPriceCardComponent', () => {
  let component: ProductPriceCardComponent;
  let fixture: ComponentFixture<ProductPriceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
