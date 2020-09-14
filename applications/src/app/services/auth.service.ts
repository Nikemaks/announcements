import { Injectable } from '@angular/core';
import User from "../interfaces/User";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  constructor() { }

  login(user: User): Observable<any> {
    const currentUser = this.createNewUser(user);
    this.currentUser = currentUser;
    return of(currentUser);
  }

  findUser(user: User): User {
    const usersFromStorage = JSON.parse(localStorage.getItem('users'));
    return usersFromStorage.find(userStore => userStore.login === user.login);
  }

  createNewUser(user: User): User {
    if (this.findUser(user)) {
      return this.findUser(user)
    }

    const users = localStorage.getItem('users');
    let array = users ? JSON.parse(users) : [];
    array.push(user);

    localStorage.setItem('users', JSON.stringify(array));
    return user;
  }

  get isAuth(): User {
    return this.currentUser;
  }

  logOut(){}
}
