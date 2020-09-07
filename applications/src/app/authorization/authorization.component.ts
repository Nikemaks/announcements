import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import User from "../interfaces/User";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.sass']
})
export class AuthorizationComponent implements OnInit {

  formAuth = new FormGroup({
    login: new FormControl(null, [
       Validators.minLength(6),
       Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  submitted = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    if (this.formAuth.invalid) {
      return
    }
    this.submitted = true;
    const user: User = {
      login: this.formAuth.value.login,
      password: this.formAuth.value.password
    };
    this.authService.login(user).subscribe((res)=> {
      this.formAuth.reset();
    })
  }

}
