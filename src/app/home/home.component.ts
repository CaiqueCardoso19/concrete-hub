import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ServiceUtil } from '../shared/service';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  search: String = '';
  user: Array<Object>;
  repositorys: Array<Object> = [];
  repository: any;
  notFound: boolean;
  constructor(private service: ServiceUtil) { }

  ngOnInit() {

  }
  
  private getUser (e) {

    this.service
        .getUser(this.search)
        .subscribe(data => {
          this.user = data;
          this.notFound = false;
          return this.getRepositorys(data.repos_url);
        },
          err => this.notFound = true
        );
  }

  private getRepositorys(url) {

    this.service
        .getRepositorys(url)
        .subscribe((response) => this.repositorys = response);
  }
}
