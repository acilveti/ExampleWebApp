import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredApiInterfaceComponent } from './bored-api-interface.component';

describe('BoredApiInterfaceComponent', () => {
  let component: BoredApiInterfaceComponent;
  let fixture: ComponentFixture<BoredApiInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredApiInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoredApiInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
