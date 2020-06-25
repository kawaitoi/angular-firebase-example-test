import { Injectable } from '@angular/core';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.afUser$.subscribe(user => console.log(user));
  }

  login() {
    this.afAuth.signInWithPopup(
      new auth.GithubAuthProvider()
    );
  }

  logout() {

  }
}
