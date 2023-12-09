import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';
import { UserEvaluation } from 'projects/interfaces/src/lib/user-evaluation';

@Component({
  selector: 'app-user-evaluation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-evaluation.component.html',
  styleUrls: ['./user-evaluation.component.scss']
})
export class UserEvaluationComponent {

  frmLanguage: FormGroup | any;
  frmEvaluation: FormGroup | any;

  exercises: Array<UserEvaluation> | undefined;
  
  profile$ = this.userservice.ProfileSignal$()
  language: string | undefined;
  level: string | undefined
  
  constructor(
    private userservice: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.frmLanguage = new FormGroup({
      'language': new FormControl(''),
      'level': new FormControl('')
    });

    this.frmEvaluation = new FormGroup({
      'exercise1': new FormArray([]),
      'exercise2': new FormArray([]),
      'exercise3': new FormArray([]),
      'exercise4': new FormArray([]),
      'exercise5': new FormArray([]),
      'exercise6': new FormArray([]),
      'exercise7': new FormArray([]),
      'exercise8': new FormArray([]),
      'exercise9': new FormArray([]),
      'exercise10': new FormArray([]),
    });

    console.log("1>>", this.profile$);
    this.language = this.route.snapshot.params['language'];
    this.level = "beginner"

    console.log("222>>>",this.language, this.level);

    if (this.language) {
      this.frmLanguage.value.language = this.language;
      this.frmLanguage.value.level = "beginner";
      this.showQuestions();
    }
  }

  showQuestions(){
    
    let language = this.frmLanguage.value.language

    this.userservice.getUserEvaluation(language)
    .subscribe({
      next: (data) => {
        this.exercises = data       
      },
      error: error => {
        console.log(error);
      }
    }) 
  }

  onCheckboxChange(e: any, exercise: number) {
    let checkArray: FormArray = this.frmEvaluation.get("exercise"+exercise.toString()) as FormArray;
    
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.frmEvaluation.value)
  }

  saveAnswers(){
    const boolValue = (currentValue: string) => currentValue === "true";
    let result = {
      'exercise1': this.frmEvaluation.value.exercise1.length>0 ? this.frmEvaluation.value.exercise1.every(boolValue): false,
      'exercise2': this.frmEvaluation.value.exercise2.length>0 ? this.frmEvaluation.value.exercise2.every(boolValue): false,
      'exercise3': this.frmEvaluation.value.exercise3.length>0 ? this.frmEvaluation.value.exercise3.every(boolValue): false,
      'exercise4': this.frmEvaluation.value.exercise4.length>0 ? this.frmEvaluation.value.exercise4.every(boolValue): false,
      'exercise5': this.frmEvaluation.value.exercise5.length>0 ? this.frmEvaluation.value.exercise5.every(boolValue): false,
      'exercise6': this.frmEvaluation.value.exercise6.length>0 ? this.frmEvaluation.value.exercise6.every(boolValue): false,
      'exercise7': this.frmEvaluation.value.exercise7.length>0 ? this.frmEvaluation.value.exercise7.every(boolValue): false,
      'exercise8': this.frmEvaluation.value.exercise8.length>0 ? this.frmEvaluation.value.exercise8.every(boolValue): false,
      'exercise9': this.frmEvaluation.value.exercise9.length>0 ? this.frmEvaluation.value.exercise9.every(boolValue): false,
      'exercise10': this.frmEvaluation.value.exercise10.length>0 ? this.frmEvaluation.value.exercise10.every(boolValue): false,
    }
    console.log(result);
    this.router.navigate(['learner/learning-path', this.language]);
  }

  resetForm(){
    console.log("reset");
    this.frmEvaluation.reset();
    this.exercises = [];
  }
}
