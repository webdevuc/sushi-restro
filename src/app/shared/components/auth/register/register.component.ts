import { CommanService } from './../../../services/comman.service';
import { SignInUpService } from './../services/sign-in-up.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public isSubmited: boolean;
  constructor(private fb: FormBuilder, private signInUpService: SignInUpService, private commanService: CommanService) { }

  ngOnInit(): void {
    this.registerationForm = this.fb.group({
      FirstName: ['', Validators.required],
      SureName: ['', Validators.required],
      Email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    });
  }

  public get f() { return this.registerationForm.controls }

  onRegisterFormSubmit() {
    this.isSubmited = true;
    if (this.registerationForm.invalid) {
      return
    }
    let param = this.registerationForm.value;
    console.log('param =>', param);
    delete param['ConfirmPassword']
    this.signInUpService.registerCustomer(param).subscribe(response => {
      if (response.status == 200) {
        this.commanService.callSuccessSwal('Register Successfully!');
        this.registerationForm.reset();
        this.registerationForm.updateValueAndValidity();
      }

    }, error => {
      this.commanService.callErrorSwal(error.message);
    });
  }

}

