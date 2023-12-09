import { Component, Inject, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements AfterViewInit {

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  // @ViewChildren('parentMenu', { read: ElementRef }) item!: ElementRef;
  @ViewChildren('parentMenu') item!:QueryList<any>;
  
  @ViewChild('burgerCloseIcon') burgerCloseIcon!: ElementRef

  @ViewChild('adminMenu') adminMenu!: ElementRef;
  @ViewChild('traineeMenu') traineeMenu!: ElementRef;
  @ViewChild('instructorMenu') instructorMenu!: ElementRef;
  @ViewChild('userMenu') userMenu!: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {}

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
  }

  // Click on mobile burger icon
  clickMobileBurgerIcon(){
    this.document.body.classList.toggle('overflow-y-hidden');
    this.mobileMenu.nativeElement.classList.toggle('-right-[120%]');
    this.mobileMenu.nativeElement.classList.toggle('right-0');
  }

  clickMobileBurgerCloseIcon() {
    this.document.body.classList.toggle('overflow-y-hidden');
    this.mobileMenu.nativeElement.classList.toggle('-right-[120%]');
    this.mobileMenu.nativeElement.classList.toggle('right-0');

    // Close submenus
    this.item.forEach(div => {
      div.nativeElement.setAttribute('aria-expanded', 'false'); 
      div.nativeElement.children[1].classList.remove('opacity-100', 'max-h-min', 'pt-3');
      div.nativeElement.children[1].classList.add('opacity-0', 'max-h-0', 'py-0');
    });
    // this.items['_results'].forEach(element => {
    //   element.nativeElement.setAttribute('aria-expanded', 'false');
    //   element.nativeElement.children[1].classList.remove('opacity-100', 'max-h-min', 'pt-3');
    //   element.nativeElement.children[1].classList.add('opacity-0', 'max-h-0', 'py-0');
    // });
  }

  // Submenu Interactivity
  toggleSubmenu(elementId: any) {
    
    let menu;
    
    switch(elementId) { 
      case "admin": { 
        menu = this.adminMenu; 
        break; 
      } 
      case "trainee": { 
        menu = this.traineeMenu;
        break; 
      }
      case "instructor": { 
        menu = this.instructorMenu;
        break; 
      } 
      default: { 
        menu = this.userMenu; 
        break; 
      } 
    } 
    
    const subMenu = menu.nativeElement.children[1]
    const itemToggle = menu.nativeElement.getAttribute('aria-expanded');
      
    // Close Submenu
    // this.items['_results'].forEach(element => {
    //   element.nativeElement.setAttribute('aria-expanded', 'false');
    //   element.nativeElement.children[1].classList.remove('opacity-100', 'max-h-min', 'pt-3');
    //   element.nativeElement.children[1].classList.add('opacity-0', 'max-h-0', 'py-0');
    // });

    this.item.forEach(div => {
      div.nativeElement.setAttribute('aria-expanded', 'false'); 
      div.nativeElement.children[1].classList.remove('opacity-100', 'max-h-min', 'pt-3');
      div.nativeElement.children[1].classList.add('opacity-0', 'max-h-0', 'py-0');
    });

    // Open Submenu
    if (itemToggle == 'false'){
      menu.nativeElement.setAttribute('aria-expanded', 'true');
      subMenu.classList.add('opacity-100', 'max-h-min', 'pt-3')
      subMenu.classList.remove('opacity-0', 'max-h-0', 'py-0')                
    }
  }
}
