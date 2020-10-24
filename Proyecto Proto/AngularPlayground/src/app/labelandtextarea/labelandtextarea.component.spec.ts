import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelandtextareaComponent } from './labelandtextarea.component';

describe('LabelandtextareaComponent', () => {
  let component: LabelandtextareaComponent;
  let fixture: ComponentFixture<LabelandtextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelandtextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelandtextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
