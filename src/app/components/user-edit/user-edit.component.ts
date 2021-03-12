import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/state';
import { selectUsername, changeUsername } from 'src/app/state';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    userNameFormControl: new FormControl('', [Validators.required]),
  });

  username$: Observable<string> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.username$ = this.store.select(selectUsername).pipe(
      map((username: string | undefined) => {
        this.form.controls.userNameFormControl.setValue(username);
        return username || '';
      })
    );
  }

  submit(): void {
    const username = this.form.controls.userNameFormControl.value;
    this.store.dispatch(changeUsername({ username }));
  }
}
