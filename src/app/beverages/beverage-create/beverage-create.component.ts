import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../beverage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beverage-create',
  templateUrl: './beverage-create.component.html',
  styleUrls: ['./beverage-create.component.css']
})

export class BeverageCreateComponent implements OnInit {

  beverage:Object;

  constructor(
    private beverageService:BeverageService,
    private router:Router
    ) { }

  ngOnInit() {
    this.beverage = {};
  }

  createBook(beverage:Object) {
    this.beverageService.addBeverage(beverage).then((resp) => {
      this.router.navigate(['/beverages']);
    });
  }

}