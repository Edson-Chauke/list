import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  router: any;

  ngOnInit(): void {}
  
  
  constructor (private userservice: UsersService,){}
  
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  
  })
  
  register(firstname:string, lastname:string, email: string, password: string){
  
    this.userservice.register({firstname, lastname, email, password}).subscribe((res:any)=> {
      console.log(res);
  
    this.router.navigate(['/dashboard']);
  
    })
  } 
}

