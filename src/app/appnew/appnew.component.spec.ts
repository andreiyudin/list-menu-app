import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnewComponent } from './appnew.component';

describe('AppnewComponent', () => {
  let component: AppnewComponent;
  let fixture: ComponentFixture<AppnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
