import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";

import { RepoService } from "../shared/repo.service";
import { Repo, User } from "../shared";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.sass']
})
export class DetailPageComponent implements OnInit {

  repo: Repo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repoService: RepoService
  ) { }

  ngOnInit() {
    this.repo = new Repo();
    this.repo.owner = new User();

    this.route.params.forEach((params: Params) => {
      let argArr = params['param'].split('-|-');
      this.repo.name = argArr[1];
      this.repo.owner.login = argArr[0];

      this.repoService.getRepository(this.repo)
        .subscribe(repo => {
          this.repo = repo;
        })
    });
  }

  goBack() {
    this.router.navigate(['/search']);
  }

}
