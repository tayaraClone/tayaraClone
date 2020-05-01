import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch() {
    if (this.search === "") alert('Search bar is empty')
    else {
      sessionStorage.setItem('____________search__name__________', this.search);
      this.router.navigate(['search/product'])
    }
  }

}
