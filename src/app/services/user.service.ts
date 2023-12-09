import { Inject, Injectable, signal } from '@angular/core';
import { BackendService } from '@c4c/services';
import { map, tap } from 'rxjs';

import { Profile } from '@c4c/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  ProfileSignal$ = signal<Profile | undefined>(undefined);
  LanguageSignal$ = signal<string>;
  backendService = Inject(BackendService);

  // login(data: any) {
  //   return this.backendService.getProfile().pipe(
  //     map((user) => {
  //       let result = user.find((item: any) => {
  //         return item.email === data.email && item.password === data.password;
  //       });
  //       if (result) {
  //         console.log('Get Profile', result);
  //         this.ProfileSignal$.set(result);
  //       }
  //       return result;
  //     })
  //   );
  // }

  // register(data: Profile) {
  //   return this.backendService.setProfile(data).pipe(
  //     tap((result) => {
  //       console.log('Register', result);
  //       this.ProfileSignal$.set(result);
  //       return result;
  //     })
  //   );
  // }

  // getUserEvaluation(language: string) {
  //   return this.backendService.getUserEvaluation().pipe(
  //     map((exercises) => {
  //       let result = exercises.filter((item: any) => {
  //         return item.type === language;
  //       });
  //       return result;
  //     })
  //   );
  // }

  // setUserEvaluation(data: object) {
  //   return this.backendService.setUserEvaluation(data);
  // }
}
