import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineLoginComponent } from './admine-login.component';

describe('AdmineLoginComponent', () => {
  let component: AdmineLoginComponent;
  let fixture: ComponentFixture<AdmineLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmineLoginComponent]
    });
    fixture = TestBed.createComponent(AdmineLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
