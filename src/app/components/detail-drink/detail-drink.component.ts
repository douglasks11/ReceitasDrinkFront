import { BehaviorSubject } from 'rxjs';
import { DrinksService } from 'src/app/services/drinks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-drink',
  templateUrl: './detail-drink.component.html',
  styleUrls: ['./detail-drink.component.css']
})
export class DetailDrinkComponent implements OnInit {

  constructor(private drinksService: DrinksService, private route: ActivatedRoute) { }

  drinkId: any;

  ngOnInit(): void {
    this.drinkId = this.route.snapshot.paramMap.get('id');
    this.loadDrinkById();
  }
  dataSource: BehaviorSubject<any> = new BehaviorSubject([]);
  loadDrinkById() {
    this.drinksService.getDrinkByid(this.drinkId).subscribe(
      response => {
        let tempArray = [];
        tempArray.push(response)
        this.dataSource.next(tempArray);
      }
    )
  }

}
