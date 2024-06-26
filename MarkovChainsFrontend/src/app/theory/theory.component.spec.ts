import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryComponent } from './theory.component';

describe('TheoryComponent', () => {
  let component: TheoryComponent;
  let fixture: ComponentFixture<TheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheoryComponent]
    });
    fixture = TestBed.createComponent(TheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
