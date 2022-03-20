import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ConfirmedValidator } from 'src/app/validator/confirmedvalidator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  user:User={
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  
  sub!:Subscription;
    public registerForm!: FormGroup;
  
    constructor(
      private formB: FormBuilder,
      private router: Router,
      private authSer: AuthServiceService
    ) {}
    
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
  
    ngOnInit(): void {
  
      this.registerForm = this.formB.group(
        {
          firstname: ['', [Validators.required, Validators.minLength(3)]],
          lastname: ['', [Validators.required, Validators.minLength(3)]],
          email: [
            '',
            [
              Validators.required,
              Validators.email,
              Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
            ],
          ],
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(5),
              Validators.pattern(
                '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}'
              ),
            ],
          ],
          confirmpassword: ['', [Validators.required, Validators.minLength(5)]],
        },
        {
          validator: ConfirmedValidator('password', 'confirmpassword'),
        }
      );
    }
  
    register() {
      if (this.registerForm.valid) {
        this.user={
          firstname: this.registerForm.value.firstname,
          lastname: this.registerForm.value.lastname,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password
        };
      this.sub=  this.authSer.registerUser(this.user).subscribe((req) => {
          window.alert('Success');
          this.router.navigate(['login']);
        });
      }
    }
    get f() {
      return this.registerForm.controls;
    }
  }
  