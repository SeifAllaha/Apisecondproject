import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeditComponent } from './sedit.component';

describe('SeditComponent', () => {
  let component: SeditComponent;
  let fixture: ComponentFixture<SeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
