import { DrinksService } from 'src/app/services/drinks.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { DomSanitizer } from '@angular/platform-browser';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-save-drink',
  templateUrl: './save-drink.component.html',
  styleUrls: ['./save-drink.component.css']
})

export class SaveDrinkComponent implements OnInit {

  constructor(private drinksService: DrinksService, private formBuilder: FormBuilder, private servNotification: NotificationsService,
    private _sanitizer: DomSanitizer, private ng2ImgMax: Ng2ImgMaxService) { }
  SaveNewDrinkForm!: FormGroup;
  SaveNewIngredienteForm!: FormGroup;
  ImagensForm!: FormGroup;
  fileSelected!: Blob;
  imageUrl?: string = "assets/imgs/Drink.png";
  data: string = "Base64";

  ngOnInit(): void {

    this.SaveNewDrinkForm = this.formBuilder.group({
      nome: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoPreparo: ['', Validators.required],
      imagens: ['', Validators.required]
    }, { updateOn: 'submit' })

    this.SaveNewIngredienteForm = this.formBuilder.group({
      ingrediente: ['', Validators.required],
      quantidade: ['', Validators.required],
      dosagem: ['', Validators.required],
    }, { updateOn: 'submit' })

    this.ImagensForm = this.formBuilder.group({
      data: [this.data, Validators.required]
    })
  }
  prodt: any[] = [];
  imagesArray: any[] = [];
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
    this.newDrinkToSave.imagens = this.ImagensForm.valueChanges;
    this.newDrinkToSave.imagens = this.imagesArray;
    this.doRequest(this.newDrinkToSave);

  }

  doRequest(request: any) {
    if (request.nome == null || request.ingredientes.length == 0 || request.modoPreparo == null || this.data == null) {
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
   let image = e.target.files[0];
    this.ng2ImgMax.resizeImage(image, 400, 300).subscribe(
      result => {
        this.fileSelected = this._sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(result)) as Blob;
      })

      console.log("imagem resized" + this.fileSelected );
    this.convertFileToBase64();
  }

  convertFileToBase64() {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
      this.data = reader.result as string;
      this.imagesArray.push(this.data);
    }
  }
}
