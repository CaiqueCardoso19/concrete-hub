
import { Component, Input } from '@angular/core';

import { Utils } from '../../utils/utils.service';

@Component({
    moduleId: module.id,
    selector: 'app-repository-list',
    styleUrls: ['../../app.component.css'],
    templateUrl: './repository-list.html'
})
export class RepositoryListComponent {
    constructor(private utils: Utils) {

    }
    @Input() repositorys;

  private orderByStars () {

    this.repositorys = this.utils.getOrderOfArraysFromObject(this.repositorys, 'stargazers_count');
  }
}

