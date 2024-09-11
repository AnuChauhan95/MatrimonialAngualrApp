import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export  const  passwordMatchValidator:ValidatorFn=(control:AbstractControl):ValidationErrors |null=>{
    // const UserPassword=control.get('UserPassword');
    // const ConfirmPassword=control.get('ConfirmPassword');
    // if(!UserPassword||!ConfirmPassword){
    //     return null;
    // }
    // return UserPassword.value === ConfirmPassword.value ? null:{passwordMismatch:true}
    return null;
}