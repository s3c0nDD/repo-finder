import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

import { Result, Repo } from './'

@Injectable()
export class RepoService {

  private apiPath: string = 'https://api.github.com/';

  constructor(
    private http: Http
  ) { }

  getSearch(query: string): Observable<Result> {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get(this.apiPath + 'search/repositories?q=' + query, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getRepository(repo: Repo): Observable<Repo> {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get(this.apiPath + 'repos/' + repo.owner.login + '/' + repo.name, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json().body || '';
      const err = body.message || JSON.stringify(body);
      errMsg = `${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('An error occurred:', errMsg);
    return Observable.throw(errMsg);
  }

}
