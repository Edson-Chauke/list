import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  service: any;
  usersservice: any;

  ngOnInit(): void {}
  
  
  constructor (private userservice: UsersService, private router: Router){}
  
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  
  })
  
  register(){
  
    this.userservice.register(this.form.value).subscribe((res:any)=> {
      console.log(res);
  
    this.router.navigate(['/dashboard']);
  
    })
  } 
}

