import { DrinksService } from 'src/app/services/drinks.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-delete-drink',
  templateUrl: './delete-drink.component.html',
  styleUrls: ['./delete-drink.component.css']
})
export class DeleteDrinkComponent implements OnInit {

  messageSucess: any = [];
  showMessageOk: boolean = false;


  constructor(private drinkService: DrinksService, private formBuilder: FormBuilder,) { }

  checkoutForm = this.formBuilder.group({
    id: ''
  });

  ngOnInit(): void {

  }

  deleteDrinkById(id: any){
    this.drinkService.deleteDrinkById(this.checkoutForm.value.id)
    .subscribe(resp => {
      if(resp.code == 200){
        this.showMessageOk = true;
        this.showMessage(resp);
      }
    })
  }

  showMessage(message : any){
    this.messageSucess = message;
    this.showMessageOk = false;

  }

  resetForm(){
    this.checkoutForm.reset();
  }

}
