import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LearnerService {
  constructor(private backendService: BackendService) {}

  getLearningPath() {
    return this.backendService.getLearningPath().pipe(
      tap((result) => {
        console.log('Learning Path', result);
        return result;
      })
    );
  }
}
