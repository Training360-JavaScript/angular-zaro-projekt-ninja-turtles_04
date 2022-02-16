import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  toggled: boolean = false;

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.toggled = !(this.toggled);
    document.querySelector('html')?.classList.toggle('nav-open');
    document.querySelector('.navbar-toggler')?.classList.toggle('toggled');
    
    const panel = document.querySelector('.main-panel');
    if (this.toggled) {
      panel?.insertAdjacentHTML('beforeend', '<div class="close-layer visible"></div>')
    } else if (panel?.lastElementChild){panel?.removeChild(panel.lastElementChild)};
    
    document.querySelector('.close-layer.visible')?.addEventListener('click', ()=>this.toggleSidebar())
  }
}
