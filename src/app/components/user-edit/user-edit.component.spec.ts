import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { changeUsername, selectUsername } from 'src/app/state';

import { UserEditComponent } from './user-edit.component';

describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;
  let store: MockStore;
  let spy: jest.SpyInstance<void>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spy = jest.spyOn(store, 'dispatch');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store.overrideSelector(selectUsername, 'username');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set username on init', () => {
    component.ngOnInit();

    expect(component.username$).toBeObservable(cold('a', { a: 'username' }));
  });

  it('submit should dispatch changeUsername', () => {
    component.form.patchValue({ userNameFormControl: 'updated username' });

    component.submit();

    expect(spy).toHaveBeenCalledWith(
      changeUsername({ username: 'updated username' })
    );
  });
});
