import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlistComponent } from './tlist.component';

describe('TlistComponent', () => {
  let component: TlistComponent;
  let fixture: ComponentFixture<TlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
