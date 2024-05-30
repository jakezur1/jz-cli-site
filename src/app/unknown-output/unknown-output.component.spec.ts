import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownOutputComponent } from './unknown-output.component';

describe('UnknownOutputComponent', () => {
  let component: UnknownOutputComponent;
  let fixture: ComponentFixture<UnknownOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnknownOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnknownOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
