import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersComponent } from './flowers.component';

describe('FlowersComponent', () => {
  let component: FlowersComponent;
  let fixture: ComponentFixture<FlowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlowersComponent]
    });
    fixture = TestBed.createComponent(FlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
