import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletadosViewComponent } from './completados-view.component';

describe('CompletadosViewComponent', () => {
  let component: CompletadosViewComponent;
  let fixture: ComponentFixture<CompletadosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletadosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletadosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
