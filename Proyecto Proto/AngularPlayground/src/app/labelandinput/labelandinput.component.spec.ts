import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelandinputComponent } from './labelandinput.component';

describe('LabelandinputComponent', () => {
  let component: LabelandinputComponent;
  let fixture: ComponentFixture<LabelandinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelandinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelandinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
