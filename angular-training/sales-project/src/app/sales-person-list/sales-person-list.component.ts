import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
salesPersonList: SalesPerson[] = [
  new SalesPerson("Pavel","Zacha","pavel.zacha@njd.com",15000),
  new SalesPerson("Nico","Hischier","nico.hischier@njd.com",51000),
  new SalesPerson("Jack","Hughes","jack.hughes@njd.com",60000),
  new SalesPerson("Jasper","Bratt","jesper.bratt@njd.com",45000)
];

  constructor() { }

  ngOnInit(): void {
  }

}
