import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzHComponent } from './jz-h.component';

describe('JzHOutputComponent', () => {
  let component: JzHComponent;
  let fixture: ComponentFixture<JzHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JzHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JzHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
