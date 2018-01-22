import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ServiceUtil } from '../shared/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  search: String = 'caiquecardoso19';
  user: Array<Object>;
  repositorys: Array<Object> = [];
  repository: any;

  constructor(private service: ServiceUtil) { }

  ngOnInit() {

  }
  
  private getUser (e) {

    this.service
        .getUser(this.search)
        .subscribe(data => {
          this.user = data;
          return this.getRepositorys(data.repos_url);
        });
  }

  private getRepositorys(url) {

    this.service
        .getRepositorys(url)
        .subscribe((response) => this.repositorys = response);
  }
}
