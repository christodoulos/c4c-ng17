import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { LandingNavigationComponent } from 'src/app/components/landing-navigation/landing-navigation.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-learn-js-python-page',
  standalone: true,
  imports: [CommonModule, LandingNavigationComponent],
  templateUrl: './learn-js-python-page.component.html',
  styleUrls: ['./learn-js-python-page.component.scss']
})
export class LearnJsPythonPageComponent {
  profile$ = this.userservice.ProfileSignal$()
  
  constructor(
    private userservice: UserService,
    private router: Router
  ) { }

  check_language(language: string) {
    console.log("learnjs", language, this.profile$);
    if (this.profile$?.language) {
      let result = this.profile$?.language.find((item:any)=> {
        return item.language === language
      })
      if (result && result.evaluation){
        console.log("learnjs1>>", language);
        this.router.navigate(['learner/learning-path', language]);
      } else {
        console.log("learnjs2>>", language);
        this.router.navigate(['user/user-evaluation', language]);
      }  
    } else { 
      console.log("learnjs3>>", language);
      this.router.navigate(['user/user-evaluation', language]);
    }
  }
}
