import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, photoUrl } from '@c4c/state';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-navigation.component.html',
  styleUrl: './student-navigation.component.css',
})
export class StudentNavigationComponent {
  store = inject(Store<AppState>);
  photoUrl$ = this.store.select(photoUrl);
}
