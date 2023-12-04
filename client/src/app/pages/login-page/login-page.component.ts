import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  ngOnInit(): void {
    this.login();

  } 
  constructor (private service:UsersService, private router:Router){}

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })


login(){

  this.service.login(this.form.value).subscribe((res:any)=> {
    console.log(res);
    this.router.navigate(['/landing-page']);
 

  })
}
}
