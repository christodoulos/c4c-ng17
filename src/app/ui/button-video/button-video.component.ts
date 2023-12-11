import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-video',
  standalone: true,
  imports: [],
  templateUrl: './button-video.component.html',
  styleUrl: './button-video.component.css',
})
export class ButtonVideoComponent {
  @Input() text = 'Try the demo';
}
