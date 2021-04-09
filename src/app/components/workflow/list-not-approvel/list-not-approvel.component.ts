import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-list-not-approvel',
  templateUrl: './list-not-approvel.component.html',
  styleUrls: ['./list-not-approvel.component.css']
})
export class ListNotApprovelComponent implements OnInit {

  constructor(private drinkService: DrinksService) { }

  dataSource: BehaviorSubject<any> = new BehaviorSubject([]);

  ngOnInit(): void {
    this.loadNotApproved();
  }

  loadNotApproved() {
    this.drinkService.getAllNotApproved().subscribe(
      resp => {
        this.dataSource.next(resp);
        console.log(this.dataSource)
      }
    )
  }

  ApprovalDrink(drinkId: any) {
    this.drinkService.approvalDrink(drinkId).subscribe(
      () => {
        this.loadNotApproved();
      }
    )
  }
  RejectDrink(drinkId: any){
    this.drinkService.deleteDrinkById(drinkId).subscribe(
      () => {
        this.loadNotApproved();
      }
    )
  }
}
