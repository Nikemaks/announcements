import { Injectable } from '@angular/core';
import User from "../interfaces/User";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: User): Observable<any> {
    const currentUser = this.findUser(user) || this.setUser(user);
    return of(currentUser);
  }

  findUser(user: User): User {
    const usersFromStorage = JSON.parse(localStorage.getItem('users'));
    return usersFromStorage.find(userStore => userStore.login === user.login);
  }

  setUser(user: User): void {
    localStorage.setItem(user.login, JSON.stringify(user));
  }

  logOut(){}
}
