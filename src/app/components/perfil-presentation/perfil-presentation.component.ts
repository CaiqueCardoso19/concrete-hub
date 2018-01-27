import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-perfil-presentation',
  styleUrls: ['../../app.component.css'],
  templateUrl: './perfil-presentation.html'
})

export class PerfilPresentationComponent {
  constructor() { }
  @Input() user;
}
