import { Component } from '@angular/core';
import {
  FacebookIconComponent,
  TwitterIconComponent,
  YoutubeIconComponent,
} from '@c4c/ui';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent, TwitterIconComponent, YoutubeIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
