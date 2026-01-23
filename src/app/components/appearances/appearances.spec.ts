import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appearances } from './appearances';

describe('Appearances', () => {
  let component: Appearances;
  let fixture: ComponentFixture<Appearances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appearances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appearances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
