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

  ngOnInit(): void {
    this.register();
    }
  
  
  constructor (private userservice: UsersService,){}
  
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  
  })
  
  register(){
  
    this.userservice.register(this.form.value).subscribe((res:any)=> {
      console.log(res);
  
    this.router.navigate(['/landing-page']);
  
    })
  } 
}

