import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleServiceService {

 // constructor(private readonly _errorService: HttpErrorResponse) { }

  handleError(err: HttpErrorResponse) {
    if (err != err || !err.error.error) {

      return throwError("Unauthroized");
    }
    else {
      return throwError(err.error.error);
    }

  }

  errMsg = {
    EMAIL_NOT_FOUND: 'This Email Does not Exists!!!',
    INVALID_PASSWORD: 'This Password is not in your current contex!!!',
    USER_DISABLED: 'This user is Disabled!!!',
    INVALID_EMAIL: 'The Email address is not  formatted.!!!'
  }
}
