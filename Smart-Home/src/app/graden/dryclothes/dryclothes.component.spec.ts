import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DryclothesComponent } from './dryclothes.component';

describe('DryclothesComponent', () => {
  let component: DryclothesComponent;
  let fixture: ComponentFixture<DryclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
