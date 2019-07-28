import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // search in GitHub website
  getResult(searchWord: string) {
    return this.http.get(this.baseUrl + searchWord);
  }

  // book mark item
  bookmark(item: any) {

    return this.http.post(this.baseUrl + 'bookmark', item, { withCredentials: true });

  }
  // get all saved bookmarks
  getAllBookmars() {
    return this.http.get<any>(this.baseUrl + 'allbookmarks/', { withCredentials: true });
  }
}
