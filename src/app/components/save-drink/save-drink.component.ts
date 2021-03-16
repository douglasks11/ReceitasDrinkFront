import { DrinksService } from 'src/app/services/drinks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-drink',
  templateUrl: './save-drink.component.html',
  styleUrls: ['./save-drink.component.css']
})
export class SaveDrinkComponent implements OnInit {

  constructor( private drinksService: DrinksService) { }

  ngOnInit(): void {
  }


}
