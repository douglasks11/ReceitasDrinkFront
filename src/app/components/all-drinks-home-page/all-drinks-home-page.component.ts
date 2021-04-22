import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-drinks-home-page',
  templateUrl: './all-drinks-home-page.component.html',
  styleUrls: ['./all-drinks-home-page.component.css']
})
export class AllDrinksHomePageComponent implements OnInit {

  constructor(private drinkService: DrinksService, private router: Router) { }

  ngOnInit(): void {
    this.getallDrinks();
    console.log("aa");
  }

  dataSource: BehaviorSubject<any> = new BehaviorSubject([]);

  getallDrinks() {
    this.drinkService.getAllDrinks().subscribe(
      e => {
        this.dataSource.next(e);
      })

  }
   giveLike(like: any){

    this.drinkService.giveLike(like).subscribe(
      () => {
        this.getallDrinks();
      })
   }
   onSelected(id: any){
    this.router.navigate(['/detailDrink', id]);
   }
}
