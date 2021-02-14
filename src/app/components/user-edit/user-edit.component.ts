import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  userNameFormControl = new FormControl('', [Validators.required]);
  userPasswordOldFormControl = new FormControl('', [Validators.required]);
  userPasswordNewFormControl = new FormControl('', []);

  constructor() {}

  ngOnInit(): void {}
}
