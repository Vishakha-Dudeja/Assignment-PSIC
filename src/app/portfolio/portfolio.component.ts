import { Component, OnInit } from '@angular/core';
import { CardDetails } from 'src/assets/constant';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public cardDetails = CardDetails;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardDetails);
  }

}
