import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Auth = firebase.auth.Auth;
import { from, Observable } from 'rxjs';

import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/model-clients';
// import { SessionStorageService } from '../services/session-storage-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth;
  url: string;

  constructor(
    private http: HttpClient,
    // private sessionStorage: SessionStorageService
  ) {
    firebase.initializeApp({
       apiKey: 'AIzaSyDaoKnC-MSM0b069pawJ5KI1eWlbmng99o',
       authDomain: 'rovianda-88249.firebaseapp.com',
      /*apiKey: "AIzaSyDtp99_k4WaCJWR8d4FncfRpkA4sJTt23c",
      authDomain: "sistema-rovianda.firebaseapp.com",*/
    });
    this.auth = firebase.auth();
    this.url = `${environment.basePath}`;
  }

  signIn(email: string, password: string): Observable<any> {
    return from(
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) =>
          Promise.all([
            Promise.resolve(userCredentials.user.uid),
            Promise.resolve(userCredentials.user.refreshToken),
          ])
        )
    ).pipe(
      map(([uid, token]) => {
      localStorage.setItem('user',uid);

      // this.sessionStorage.set('uid',`${uid}`);
     return ({ uid, token })
    }));
  }



  // this.auth.authState.subscribe(user => {
  //   if (user) {
  //     this.userData = user; // Setting up user data in userData var
  //     localStorage.setItem('user', JSON.stringify(this.userData));
  //     JSON.parse(localStorage.getItem('user'));
  //   } else {
  //     localStorage.setItem('user', null);
  //     JSON.parse(localStorage.getItem('user'));
  //   }
  // })

  getUserData(uid: string): Observable<User> {
    console.log(localStorage.getItem('uid'))
    return this.http.get<User>(`${this.url}/user/${uid}`);
  }
}


