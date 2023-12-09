import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [ CommonModule, NavigationComponent ],
  templateUrl: './container-layout.component.html',
  styleUrls: ['./container-layout.component.css']
})
export class ContainerLayoutComponent {

}
