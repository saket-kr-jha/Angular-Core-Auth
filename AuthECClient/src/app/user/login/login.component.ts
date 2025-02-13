import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent implements OnInit {
  isSubmitted: Boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/dashboard');
    }
  }

  form = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return (
      Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched))
    );
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.authService.loginUser(this.form.value).subscribe({
        next: (res: any) => {
          this.authService.saveToken(res.token);
          this.router.navigateByUrl('/dashboard');
        },
        error: (err: any) => {
          if (err.status == 400) {
            this.toastr.error('Incorrect email or password.', 'Login Failed');
          } else {
            console.log('error', err);
          }
        },
      });
    }
  }
}
