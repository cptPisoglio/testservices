import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PintypeComponent } from './pintype.component';

describe('PintypeComponent', () => {
  let component: PintypeComponent;
  let fixture: ComponentFixture<PintypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PintypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PintypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
