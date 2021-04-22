import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrorHandler{

    static handlerError(error: HttpErrorResponse){
        let errorMessage: string

        if (error.error instanceof ErrorEvent) {
            errorMessage = `Erro http ${error.status} ao acessar URL ${error.url} - ${error.statusText}`
        }else {
            errorMessage = error.error.message;
        }
        return throwError(errorMessage);
    }

    
}