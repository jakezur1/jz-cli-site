import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootUpProgressBarComponent } from './boot-up-progress-bar.component';

describe('BootUpProgressBarComponent', () => {
  let component: BootUpProgressBarComponent;
  let fixture: ComponentFixture<BootUpProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootUpProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootUpProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
