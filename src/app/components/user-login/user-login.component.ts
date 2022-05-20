import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginuserService } from 'src/app/services/loginuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();


  constructor(private loginuserService: LoginuserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user) 
    this.loginuserService.loginUser(this.user).subscribe(data=>{
      alert("Login Succesfully")
    },error=>alert("Sorry Please enter correct UserId and Password"));   
  }




  
}
