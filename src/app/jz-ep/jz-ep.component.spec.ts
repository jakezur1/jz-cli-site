import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JzEpComponent } from './jz-ep.component';

describe('JzEpComponent', () => {
  let component: JzEpComponent;
  let fixture: ComponentFixture<JzEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JzEpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JzEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
