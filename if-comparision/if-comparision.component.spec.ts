import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfComparisionComponent } from './if-comparision.component';

describe('IfComparisionComponent', () => {
  let component: IfComparisionComponent;
  let fixture: ComponentFixture<IfComparisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfComparisionComponent]
    });
    fixture = TestBed.createComponent(IfComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
