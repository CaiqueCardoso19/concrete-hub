import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { ServiceUtil } from '../shared/service';


@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css', '../app.component.css']
})
export class RepositoryDetailComponent implements OnInit {
  private userName: any;
  private repoName: any;
  private repoDetail: any;
  private languages: any;

  constructor(private service: ServiceUtil, private route: ActivatedRoute, private location: Location) { 
    this.route.params.subscribe(params => {
      this.userName = params['name'];
      this.repoName = params['repo'];
    })
  }

  ngOnInit() {
    this.getRepoDetail(this.userName, this.repoName);
  }

  private getRepoDetail (name, repoName) {
    this.service
    .getRepositoryDescription(name, repoName)
    .subscribe(data => {
      this.repoDetail = data;
      return this.getRepoLangs(data.languages_url)
    });
  }

  private getRepoLangs(url) {
    this.service
        .getRepositorys(url)
        .subscribe((response) => {
          this.languages = Object.keys(response);
        });
  }

  private goBack() {
    this.location.back();
  }

}