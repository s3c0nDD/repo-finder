import { Component, OnInit } from '@angular/core';

import { RepoService } from "../shared/repo.service";
import { Result, Repo } from "../shared";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  query: string;
  result: Result;

  constructor(
    private repoService: RepoService
  ) { }

  ngOnInit() {
  }

  private search() {
    this.repoService.getSearch(this.query)
      .subscribe(result => {
        this.result = result;
      });
  }

  private goToDetail(repo: Repo) {
    alert('Go to detail:' + repo.git_url);
  }

}
