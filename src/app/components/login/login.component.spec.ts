import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { loginUser } from 'src/app/state';
import { OverviewComponent } from '../overview/overview.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  let spy: jest.SpyInstance<void>;
  class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useClass: RouterStub },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spy = jest.spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch loginUser on submit', () => {
    component.form.patchValue({ userNameFormControl: 'username' });

    component.submit();

    expect(spy).toHaveBeenCalledWith(
      loginUser({ user: { username: 'username' } })
    );
  });
});
