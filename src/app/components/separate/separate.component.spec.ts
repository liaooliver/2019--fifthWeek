import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateComponent } from './separate.component';

describe('SeparateComponent', () => {
  let component: SeparateComponent;
  let fixture: ComponentFixture<SeparateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
