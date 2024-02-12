import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrederikComponent } from './frederik.component';

describe('FrederikComponent', () => {
  let component: FrederikComponent;
  let fixture: ComponentFixture<FrederikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrederikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrederikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
