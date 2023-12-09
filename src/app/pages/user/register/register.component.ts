import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fmrRegister: FormGroup | any;
  loading = false;
  signuser:any;

  constructor(
    private userservice: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fmrRegister = new FormGroup({
      'email': new FormControl(''),
      'firstname': new FormControl(''),
      'lastname': new FormControl(''),
      'password': new FormControl(''),
      'password_confirm': new FormControl(''),
      'role': new FormGroup({
        'type': new FormControl('')
      })
    })
  }

  register() {
    this.signuser = this.fmrRegister.value
    this.userservice.register(this.fmrRegister.value)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('learn-js-python-page');
        },
        error: error => {
          console.log(error);
          this.loading = false;
        }
      })
  }
}
