import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTreeComponent } from './water-tree.component';

describe('WaterTreeComponent', () => {
  let component: WaterTreeComponent;
  let fixture: ComponentFixture<WaterTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
