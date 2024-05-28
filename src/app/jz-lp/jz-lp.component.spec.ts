import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzLpComponent } from './jz-lp.component';

describe('JzLpComponent', () => {
  let component: JzLpComponent;
  let fixture: ComponentFixture<JzLpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JzLpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JzLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
