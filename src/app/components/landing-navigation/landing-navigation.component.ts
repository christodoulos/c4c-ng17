import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-landing-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-navigation.component.html',
  styleUrls: ['./landing-navigation.component.scss']
})
export class LandingNavigationComponent {

  uri: string | undefined;
  
  constructor(
    private helpersService: HelpersService
  ){}

  ngOnInit() {
    this.uri = this.helpersService.getURI();
  }


}
