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
  dataSource: BehaviorSubject<any> = new BehaviorSubject([]);

  SaveNewDrinkForm = this.formBuilder.group({
    nome: '',
    modopreparo: ''
  })

  SaveNewIngredienteForm = this.formBuilder.group({
    ingredientes: '',
    quantidade: '',
    dosagem: '',
  })

  onSubmit() {

    console.log(this.SaveNewIngredienteForm.value);
    console.log(this.SaveNewDrinkForm.value);
    this.prodt.push(this.SaveNewIngredienteForm.value);
    this.dataSource.next(this.prodt);
    console.log(this.prodt);
  }
}
