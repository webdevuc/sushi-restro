import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchingPasswords, mustMatch } from '../app-validators';
import { SignInUpService } from '../shared/components/auth/services/sign-in-up.service';
import { CommanService } from '../shared/services/comman.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public changePasswordForm: FormGroup
  public sendEmailForm: FormGroup
  public isSubmited: boolean = false;
  public verificationCode: any;
  public isVerify: boolean = false;
  public snedEmail: boolean = false;

  public showNewPass: boolean = false;
  public showConfirmPass: boolean = false;
  private email: any
  constructor(
    private signInUpService: SignInUpService,
    private formBuilder: FormBuilder,
    private commanService: CommanService
  ) { }

  ngOnInit(): void {
    this.sendEmailForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    })

    this.changePasswordForm = this.formBuilder.group({
      NewPassword: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
    },
      {
        validator: mustMatch('NewPassword', 'ConfirmPassword')
      }
    )
  }

  get f() {
    return this.sendEmailForm.controls;
  }

  get changePassForm() {
    return this.changePasswordForm.controls;
  }

  onCodeCompleted(code: string) {
    this.verificationCode = code;
  }

  public onSendEmail() {
    this.isSubmited = true;
    if (this.sendEmailForm.invalid) {
      return
    }
    if (this.isSubmited && this.sendEmailForm.valid) {
      this.email = this.sendEmailForm.value.Email
      this.signInUpService.forgotPasswordSendMail(this.sendEmailForm.value)
        .subscribe(response => {
          if (response.status == 200) {
            this.commanService.callSuccessSwal(response.message);
            this.sendEmailForm.reset();
            this.snedEmail = true
            this.isSubmited = false
          } else {
            this.commanService.callErrorSwal(response.message)
          }
        })
    }

  }

  public verifyPasswordCode() {
    this.isSubmited = true;
    if (this.isSubmited && this.verificationCode) {
      this.signInUpService.verifyCode({ VerificationCode: this.verificationCode, Email: this.email })
        .subscribe(response => {
          if (response.status == 200) {
            this.commanService.callSuccessSwal(response.message);
            this.isVerify = true;
            this.isSubmited = false;
          } else {
            this.commanService.callErrorSwal(response.message)
          }
        })
    }
  }

  public onChangePassword() {
    this.isSubmited = true
    if (this.changePasswordForm.invalid) {
      return;
    }
    if (this.isSubmited && this.changePasswordForm.valid) {
      this.signInUpService.resetPassword({ Password: this.changePasswordForm.value.NewPassword, Email: this.email })
        .subscribe(response => {
          if (response.status == 200) {
            this.commanService.callSuccessSwal(response.message);
            this.isVerify = false;
            this.snedEmail = false
            this.isSubmited = false;
          } else {
            this.commanService.callErrorSwal(response.message)
          }
        })
    }
  }

}
