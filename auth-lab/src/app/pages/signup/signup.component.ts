import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { Component } from '@angular/core';
import { DefaultAuthLayoutComponent } from '../../components/default-auth-layout/default-auth-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaultAuthLayoutComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './signup.component.html',
  providers: [LoginService]
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) {
    this.signupForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }

  submit() {
    this.loginService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastrService.success("Login successfully."),
      error: () => this.toastrService.error("An error occured during login.")
    });
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
