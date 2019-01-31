import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PintypesComponent } from './pintypes.component';

describe('PintypesComponent', () => {
  let component: PintypesComponent;
  let fixture: ComponentFixture<PintypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PintypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PintypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
