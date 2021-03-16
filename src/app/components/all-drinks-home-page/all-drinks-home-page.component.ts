import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-all-drinks-home-page',
  templateUrl: './all-drinks-home-page.component.html',
  styleUrls: ['./all-drinks-home-page.component.css']
})
export class AllDrinksHomePageComponent implements OnInit {

  getAllDrinks: any[] = [];

  constructor(private drinkService: DrinksService) { }

  ngOnInit(): void {

    this.getallDrinks();
  }

  getallDrinks() {
    this.drinkService.getAllDrinks().subscribe(
      e => {
        this.getAllDrinks = e;
        console.log(this.getAllDrinks)
    })

}
}
