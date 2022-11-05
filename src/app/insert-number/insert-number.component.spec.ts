import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNumberComponent } from './insert-number.component';

describe('InsertNumberComponent', () => {
  let component: InsertNumberComponent;
  let fixture: ComponentFixture<InsertNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
