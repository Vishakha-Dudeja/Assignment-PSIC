import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() headingName: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.headingName);
  }

  public onHeaderClick() {
    console.log('clicked on header');
    this.router.navigate(['/tables']);
  }
}
