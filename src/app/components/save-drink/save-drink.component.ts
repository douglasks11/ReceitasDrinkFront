import { drinkDTO } from './../../models/drinkDTO';
import { DrinksService } from 'src/app/services/drinks.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-save-drink',
  templateUrl: './save-drink.component.html',
  styleUrls: ['./save-drink.component.css']
})
export class SaveDrinkComponent implements OnInit {

  constructor(private drinksService: DrinksService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  prodt: any[] = [];
  newDrinkToSave: any;
  dataSource: BehaviorSubject<any> = new BehaviorSubject([]);

  SaveNewDrinkForm = this.formBuilder.group({
    nome: '',
    ingredientes: '',
    modopreparo: ''
  })

  SaveNewIngredienteForm = this.formBuilder.group({
    ingrediente: '',
    quantidade: '',
    dosagem: '',
  })

  onSubmitIngredientes() {

    this.prodt.push(this.SaveNewIngredienteForm.value);
    this.dataSource.next(this.prodt);
    console.log(this.dataSource.value);

    this.SaveNewIngredienteForm.reset();
  }
  OnSubmitDrink() {

    this.newDrinkToSave = this.SaveNewDrinkForm.value;
    this.newDrinkToSave.ingredientes = this.dataSource.value;

    this.doRequest(this.newDrinkToSave);
    console.log(this.newDrinkToSave);
  }

  doRequest(request: any) {

    this.drinksService.save(request).subscribe(
      resp => {
        console.log(resp);


        this.clearAllForms();
      }
    )

  }

  clearAllForms() {
    this.SaveNewDrinkForm.reset();
    this.SaveNewIngredienteForm.reset();
    this.dataSource.next(null);
  }
}
