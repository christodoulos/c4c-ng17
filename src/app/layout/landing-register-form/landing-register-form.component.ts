import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppState, firstName, name, email, photoUrl } from '@c4c/state';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'layout-landing-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-register-form.component.html',
  styleUrl: './landing-register-form.component.css',
})
export class LandingRegisterFormComponent implements OnInit, OnDestroy {
  store = inject(Store<AppState>);

  name$ = this.store.select(name);
  firstName$ = this.store.select(firstName);
  email$ = this.store.select(email);
  photoUrl$ = this.store.select(photoUrl);

  done = new Subject();

  form = new FormGroup({
    email: new FormControl({ value: '', disabled: true }, Validators.required),
    name: new FormControl({ value: '', disabled: true }, Validators.required),
    category: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.email$
      .pipe(takeUntil(this.done))
      .subscribe((email) => this.form.get('email')?.setValue(email ?? ''));
    this.name$
      .pipe(takeUntil(this.done))
      .subscribe((name) => this.form.get('name')?.setValue(name ?? ''));
  }

  ngOnDestroy(): void {
    this.done.complete();
  }

  onImageError(event: any) {
    event.target.src = '/assets/icons/user-account.svg';
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
