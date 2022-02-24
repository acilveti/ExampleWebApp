import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendDemoComponent } from './backend-demo.component';

describe('BackendDemoComponent', () => {
  let component: BackendDemoComponent;
  let fixture: ComponentFixture<BackendDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
