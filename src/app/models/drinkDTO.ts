import { ingredientesDTO } from './ingredientesDTO';
export interface drinkDTO{

  id: number;
  ingredientes: [ingredientesDTO];
  modo_preparo: string;

}
