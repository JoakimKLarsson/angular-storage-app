import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/state';
import { selectUsername } from 'src/app/state/user/user.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  userNameFormControl = new FormControl('', [Validators.required]);

  username$: Observable<string> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectUsername)
      .pipe(
        tap((username: string) => {
          this.userNameFormControl.setValue(username);
        })
      )
      .subscribe();
  }
}
