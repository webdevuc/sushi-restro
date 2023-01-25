import { AuthenticationService } from './../../../../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignInUpService } from '../services/sign-in-up.service';
import { CommanService } from 'src/app/shared/services/comman.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public isSubmited: boolean;
  constructor(private fb: FormBuilder, private signInUpService: SignInUpService, private commanService: CommanService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      Password: ['', Validators.required],
    });
  }

  public get f() { return this.loginForm.controls }

  onLoginFormSubmit() {
    this.isSubmited = true;
    if (this.loginForm.invalid) {
      return
    }

    // this.signInUpService.loginCustomer(this.loginForm.value).subscribe(response => {
    //   if (response.status == 200) {
    //     this.commanService.callSuccessSwal('Login Successfully!');

    //     this.commanService.subjectOpenLoginModal.next(false);
    //   }
    // }, error => {
    //   this.commanService.callErrorSwal(error.error.message)

    // })
    this.authenticationService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.commanService.callSuccessSwal('Login Successfully!');
          this.commanService.subjectOpenLoginModal.next(false);
        },
        error => {
          this.commanService.callErrorSwal(error.error.message)
        });
  }

}
