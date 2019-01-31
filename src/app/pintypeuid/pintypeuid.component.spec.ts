import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PintypeuidComponent } from './pintypeuid.component';

describe('PintypeuidComponent', () => {
  let component: PintypeuidComponent;
  let fixture: ComponentFixture<PintypeuidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PintypeuidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PintypeuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
