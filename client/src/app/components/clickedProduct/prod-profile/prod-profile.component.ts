import { Component, OnInit } from '@angular/core';
import { ProdsService } from 'src/app/services/prods.service';
import { SearchProd } from 'src/app/classes/search-prod';

@Component({
  selector: 'app-prod-profile',
  templateUrl: './prod-profile.component.html',
  styleUrls: ['./prod-profile.component.css']
})
export class ProdProfileComponent implements OnInit {
  prodProfile: SearchProd;
  constructor(private prodService: ProdsService) { }
  _id: string;
  ngOnInit(): void {
    this._id = window.location.pathname.split('/')[2]; // retreive id from path name
    this.retreiveProdProfile(this._id);
  }

  retreiveProdProfile(_id) {
    this.prodService.getProdProfile(_id) // retreive prod profile (product and its seller data)
      .subscribe((res: any) => {
        this.prodProfile = res.data; // set prodProfile to product and its seller data
        console.log(this.prodProfile)
      }, err => console.log(err))
  }

}
