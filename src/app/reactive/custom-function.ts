import { AbstractControl, ValidationErrors } from "@angular/forms";

export function checkValue (cntrl:AbstractControl):ValidationErrors | null {

    let value = cntrl.value;
    
    console.log(value);
    
    if(value <= 10){
      return {'invalid':false}
    }
    else{
    return null;
    }
      
    }