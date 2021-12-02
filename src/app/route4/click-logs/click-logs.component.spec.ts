import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickLogsComponent } from './click-logs.component';

describe('ClickLogsComponent', () => {
  let component: ClickLogsComponent;
  let fixture: ComponentFixture<ClickLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
