import { DrinksService } from 'src/app/services/drinks.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-save-drink',
  templateUrl: './save-drink.component.html',
  styleUrls: ['./save-drink.component.css']
})
export class SaveDrinkComponent implements OnInit {

  constructor(private drinksService: DrinksService, private formBuilder: FormBuilder, private servNotification: NotificationsService,
    private _sanitizer: DomSanitizer) { }
  SaveNewDrinkForm!: FormGroup;
  SaveNewIngredienteForm!: FormGroup;
  fileSelected?: Blob;
  imageUrl?: string = "assets/imgs/Drink.png";
  base64: string = "Base64";

  ngOnInit(): void {

    this.SaveNewDrinkForm = this.formBuilder.group({
      nome: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoPreparo: ['', Validators.required],
      imagebase64: ''
    }, { updateOn: 'submit' })

    this.SaveNewIngredienteForm = this.formBuilder.group({
      ingrediente: ['', Validators.required],
      quantidade: ['', Validators.required],
      dosagem: ['', Validators.required],
    }, { updateOn: 'submit' })
  }
  prodt: any[] = [];
  newDrinkToSave: any;
  dataSource: BehaviorSubject<any> = new BehaviorSubject([]);

  onSubmitIngredientes() {

    this.prodt.push(this.SaveNewIngredienteForm.value);
    this.dataSource.next(this.prodt);

    this.SaveNewIngredienteForm.reset();
  }
  OnSubmitDrink() {

    this.newDrinkToSave = this.SaveNewDrinkForm.value;
    this.newDrinkToSave.ingredientes = this.dataSource.value;
    this.newDrinkToSave.imagebase64 = this.base64;
    this.doRequest(this.newDrinkToSave);

  }

  doRequest(request: any) {
    if (request.nome == null || request.ingredientes.length == 0 || request.modoPreparo == null || this.base64 == null) {
      this.onError("Por favor revise o formario");
    } else {
      this.drinksService.save(request).subscribe(
        () => {
          this.onSucess("Adicionado com sucesso");
          console.log(request);
          this.clearAllForms();
        }
      )
    }
  }

  clearAllForms() {
    this.SaveNewDrinkForm.reset();
    this.SaveNewIngredienteForm.reset();
    this.SaveNewIngredienteForm.clearValidators();
    this.dataSource.next(null);
  }

  onSucess(message: any) {
    this.servNotification.success('Sucesso', message, {
      position: ['top', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgressBar: true
    });
  }
  onError(message: any) {
    this.servNotification.error('Algo deu errado!', message, {
      position: ['top', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgressBar: true
    })
  }

  onSelectNewFile(e: any): void {
    this.fileSelected = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.imageUrl = this._sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;

    this.convertFileToBase64();
  }

  convertFileToBase64() {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
    }
  }
}
