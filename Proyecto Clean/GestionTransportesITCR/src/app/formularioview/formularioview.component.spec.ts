import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioviewComponent } from './formularioview.component';

describe('FormularioviewComponent', () => {
  let component: FormularioviewComponent;
  let fixture: ComponentFixture<FormularioviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
