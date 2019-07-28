import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: any;
  tempItem: any;
  allItems: any;
  constructor(public search: SearchService) { }

  ngOnInit() {
  }


  bookmark() {

    this.search.bookmark(this.item).subscribe(() => {
      console.log('complite post');
    }, error => {
      console.log(error);
    });
  }
}
