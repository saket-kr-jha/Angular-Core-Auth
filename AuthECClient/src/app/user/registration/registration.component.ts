import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './registration.component.html',
  styles: ``,
})
export class RegistrationComponent {
  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  isSubmitted: Boolean = false;

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/dashboard');
    }
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value != confirmPassword.value)
      confirmPassword?.setErrors({ passwordMismatch: true });
    else confirmPassword?.setErrors(null);
    return null;
  };

  form = this.formBuilder.group(
    {
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: [''],
    },
    { validators: this.passwordMatchValidator }
  );

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.authService.createUser(this.form.value).subscribe({
        next: (res: any) => {
          if (res.succeeded) {
            this.form.reset();
            this.isSubmitted = false;
            this.toastr.success('New User Created', 'Registration successful');
          }
        },
        error: (err: any) => {
          if (err.error.errors) {
            err.error.errors.forEach((x: any) => {
              switch (x.code) {
                case 'DuplicateUserName':
                  break;
                case 'DuplicateEmail':
                  this.toastr.error(
                    'Email ia already taken',
                    'Registration Failed'
                  );
                  break;
                default:
                  this.toastr.error(
                    'Something went wrong, Please contact the developer',
                    'Registration Failed'
                  );
                  break;
              }
            });
          } else {
            console.log('error', err);
          }
        },
      });
    }
  }

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return (
      Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched))
    );
  }
}
