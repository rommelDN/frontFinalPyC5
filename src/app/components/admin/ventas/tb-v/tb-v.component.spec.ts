import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbVComponent } from './tb-v.component';

describe('TbVComponent', () => {
  let component: TbVComponent;
  let fixture: ComponentFixture<TbVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TbVComponent]
    });
    fixture = TestBed.createComponent(TbVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
