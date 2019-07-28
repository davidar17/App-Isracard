import { Component } from '@angular/core';
import { SearchService } from './_services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  response: any;
  items: any[];
  word: string;

  constructor(public searchGitHub: SearchService) { }

  searchUrl(word) {
    this.searchGitHub.getResult(word).subscribe(obj => {
      this.response = obj;
      this.items = this.response.items;
    });
  }

  getAllBookmars() {
    this.searchGitHub.getAllBookmars().subscribe(obj => { this.items = obj; });
  }
}
