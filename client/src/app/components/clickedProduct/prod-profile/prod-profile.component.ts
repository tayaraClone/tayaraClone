import { Component, OnInit } from '@angular/core';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-prod-profile',
  templateUrl: './prod-profile.component.html',
  styleUrls: ['./prod-profile.component.css']
})
export class ProdProfileComponent implements OnInit {

  constructor(private prodService: ProdsService) { }
  _id: string;
  ngOnInit(): void {
    this._id = window.location.pathname.split('/')[2];
    console.log(this._id)
  }

}
