import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplogoComponent } from './aplogo.component';

describe('AplogoComponent', () => {
  let component: AplogoComponent;
  let fixture: ComponentFixture<AplogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
