import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['../../app.component.css']
})
export class HeaderComponent {
  constructor() {}

  logoImg: String = 'https://material.angular.io/assets/img/homepage/github-circle-white-transparent.svg';
}
