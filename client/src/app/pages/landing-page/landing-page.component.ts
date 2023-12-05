import { Component } from '@angular/core';
import { Clothing } from 'src/app/interface/clothing';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  clothing: Clothing[] = [];
id: any;

  constructor(private usersService: UsersService) { }

  name: string = '';
  number: string = '';


  form = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''), 
 })



  ngOnInit() {

    /// this is to display everything that is coming from the database/// 


    this.usersService.read().subscribe((data: any) => {
      this.clothing = data

      console.log(this.clothing)

    })

  }  
////create
  create(){

    let clothing = { 
      name: this.form.value.name || '',
      number: this.form.value.number ||''
    }

    this.usersService.create(clothing).subscribe((res:any) =>{
      console.log(res);
      window.location.reload();
    })
  }

//////delete
delete(id:any){

  this.usersService.delete(id).subscribe((res:any)=>{
    window.location.reload();
  })
}
////update
update(id:any){
  let clothing = {
   name: this.name ||'', 
   number: this.number || '', 
  }
  this.usersService.update(id).subscribe((res:any) =>{
    console.log(res);
  })
}
 
}
