import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

import { Result } from './'

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
        // console.log("Response", res.json());
        return res.json();
      });
  }

}
