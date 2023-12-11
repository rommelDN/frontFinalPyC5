import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbProductComponent } from './tb-product.component';

describe('TbProductComponent', () => {
  let component: TbProductComponent;
  let fixture: ComponentFixture<TbProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TbProductComponent]
    });
    fixture = TestBed.createComponent(TbProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
