import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutoolbarComponent } from './menutoolbar.component';

describe('MenutoolbarComponent', () => {
  let component: MenutoolbarComponent;
  let fixture: ComponentFixture<MenutoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
