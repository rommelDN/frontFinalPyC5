import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbComComponent } from './tb-com.component';

describe('TbComComponent', () => {
  let component: TbComComponent;
  let fixture: ComponentFixture<TbComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TbComComponent]
    });
    fixture = TestBed.createComponent(TbComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
