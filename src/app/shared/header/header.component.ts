import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active: boolean = false;
  @ViewChildren('.nav__links li') navLinks!: [];
  // navLinks: any = document.querySelectorAll('.nav__links li');
  constructor() { 
  }
  ngOnInit(): void {
    console.log(this.navLinks);
  }
  

}
