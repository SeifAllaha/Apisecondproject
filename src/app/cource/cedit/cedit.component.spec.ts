import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeditComponent } from './cedit.component';

describe('CeditComponent', () => {
  let component: CeditComponent;
  let fixture: ComponentFixture<CeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
