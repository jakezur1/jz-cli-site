import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootUpComponent } from './boot-up.component';

describe('BootUpComponent', () => {
  let component: BootUpComponent;
  let fixture: ComponentFixture<BootUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
