import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendientesViewComponent } from './pendientes-view.component';

describe('PendientesViewComponent', () => {
  let component: PendientesViewComponent;
  let fixture: ComponentFixture<PendientesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendientesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendientesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
