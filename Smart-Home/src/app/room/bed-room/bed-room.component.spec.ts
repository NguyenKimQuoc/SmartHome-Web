import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedRoomComponent } from './bed-room.component';

describe('BedRoomComponent', () => {
  let component: BedRoomComponent;
  let fixture: ComponentFixture<BedRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
