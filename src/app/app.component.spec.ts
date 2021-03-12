import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { logoutUser, selectUser } from './state';
import { initialState } from './state/user/user.reducer';
import { cold, hot } from 'jasmine-marbles';

class RouterStub {
  url = '';
  navigate(commands: any[], extras?: any) {}
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;
  let router: Router;
  let spy: jest.SpyInstance<void>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({
          initialState: { user: { username: 'Test user' } },
        }),
        { provide: Router, useClass: RouterStub },
      ],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    spy = jest.spyOn(store, 'dispatch');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('ngOnInit should set isLoggedIn$ observable', () => {
    component.ngOnInit();
    expect(component.isLoggedIn$).toBeObservable(hot('a', { a: true }));
  });

  it('logout should dispatch logout action and route to logout', () => {
    component.logout();
    expect(spy).toHaveBeenCalledWith(logoutUser());
  });
});
