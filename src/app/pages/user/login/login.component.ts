import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fmrLogin:FormGroup | any;
  loading = false;

  errorTxt: string | undefined
  
  constructor(
    private userservice: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fmrLogin = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }

  login(){
    this.loading = true;

    this.userservice.login(this.fmrLogin.value)
      .subscribe({
        next: (result) => {
            if (result)
              this.router.navigateByUrl('/learn-js-python-page');
            else 
              this.errorTxt = "Username or Password failed";
        },
        error: error => {
            this.loading = false;
        }
    });
  }
}
