import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TileVideoComponent } from 'src/app/ui/tile-video/tile-video.component';

@Component({
  selector: 'app-landing-content',
  standalone: true,
  imports: [CommonModule, RouterLink, TileVideoComponent],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.css',
})
export class LandingContentComponent {}
