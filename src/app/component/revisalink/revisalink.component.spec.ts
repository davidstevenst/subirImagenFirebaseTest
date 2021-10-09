import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisalinkComponent } from './revisalink.component';

describe('RevisalinkComponent', () => {
  let component: RevisalinkComponent;
  let fixture: ComponentFixture<RevisalinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisalinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisalinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
