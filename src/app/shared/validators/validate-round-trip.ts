import { ValidationErrors, AbstractControl, FormGroup } from "@angular/forms";


export function validateRoundTrip(group: FormGroup): ValidationErrors | null {
  const from = group.get('from');
  const to = group.get('to');

  if(!from || !to) {
    return null;
  }

  if(from.value === to.value) {
    return {
      roundtrip: true
    };
  }

  return null;
}
