import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  ngOnInit(): void {}
  constructor(private service: UsersService, private router: Router) {}



  login(email: string, password: string) {
  
    this.service.login({email, password}).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/dashboard']);
      
    });
  }
}
