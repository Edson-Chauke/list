import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Route } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  router: any;

  ngOnInit(): void {}
  
  
  constructor (private userservice: UsersService, ){}
  

  register(firstname:string, lastname:string, email: string, password: string){
  
    this.userservice.register({firstname, lastname, email, password}).subscribe((res:any)=> {
      console.log(res);
  
    this.router.navigate(['/dashboard']);
  
    })
  } 
}

