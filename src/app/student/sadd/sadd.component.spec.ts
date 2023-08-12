import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaddComponent } from './sadd.component';

describe('SaddComponent', () => {
  let component: SaddComponent;
  let fixture: ComponentFixture<SaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
