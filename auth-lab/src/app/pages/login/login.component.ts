import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { DefaultAuthLayoutComponent } from '../../components/default-auth-layout/default-auth-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultAuthLayoutComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastrService.success("Login successfully."),
      error: () => this.toastrService.error("An error occured during login.")
    });
  }

  navigate() {
    this.router.navigate(["signup"]);
  }
}
