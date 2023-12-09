import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile, Exercise, UserEvaluation } from '@c4c/interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(
      'http://localhost:3000/profile',
      httpOptions
    );
  }

  setProfile(data: Profile): Observable<Profile> {
    return this.http.post<Profile>(
      'http://localhost:3000/profile',
      JSON.stringify(data),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  getUserEvaluation(): Observable<UserEvaluation[]> {
    return this.http.get<UserEvaluation[]>(
      'http://localhost:3000/user_evaluation',
      httpOptions
    );
  }

  setUserEvaluation(data: object) {
    return this.http.patch<Profile>(
      'http://localhost:3000/profile/',
      JSON.stringify(data),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  getLearningPath(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(
      'http://localhost:3000/exercises',
      httpOptions
    );
  }
}
