import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  uri: string | undefined;

  constructor() { }

  getURI() {
    return this.uri;
  }

  setURI(latestValue: string) {
    return this.uri = latestValue;
  }
}
