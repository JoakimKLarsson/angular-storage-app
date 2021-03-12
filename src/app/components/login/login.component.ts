import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, loginUser } from 'src/app/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    userNameFormControl: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, public router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    const username = this.form.controls.userNameFormControl.value;
    const user = { username };
    this.store.dispatch(loginUser({ user }));
    this.router.navigate(['overview']);
  }
}
