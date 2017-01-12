import { Component } from '@angular/core';
import { RepoService } from "./shared/repo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ RepoService ]
})
export class AppComponent {
}
