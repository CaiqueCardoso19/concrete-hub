import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceUtil {

  pathUser: String =  'https://api.github.com/users/';
  pathRepos: String = 'https://api.github.com/repos/';

  constructor (private http: Http) {}

  getUser(user) {
    return this.http
                .get(`${this.pathUser}${user}`)
                .map((res: Response) => res.json());
  }

  getRepositorys(url) {
    return this.http
                .get(`${url}`)
                .map((res: Response) => res.json());

  }

  getRepositoryDescription(userName, repoName) {
    return this.http
                .get(`${this.pathRepos}${userName}/${repoName}`)
                .map((res: Response) => res.json());
  }
  
  getRepoLanguages(url) {
    return this.http
                .get(`${url}`)
                .map((res: Response) => res.json());
  }
}
