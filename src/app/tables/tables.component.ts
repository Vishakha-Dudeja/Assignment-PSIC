import { Component, OnInit } from '@angular/core';
import { TableDetailsService } from 'src/services/taleDetails.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  products: any[];

  constructor(private tableDetailsService: TableDetailsService) { }

  ngOnInit() {
      this.tableDetailsService.getProductsSmall().then(data => this.products = data);
  }

}
