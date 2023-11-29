import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTotalComponent } from './table-total.component';

describe('TableTotalComponent', () => {
  let component: TableTotalComponent;
  let fixture: ComponentFixture<TableTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTotalComponent]
    });
    fixture = TestBed.createComponent(TableTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
