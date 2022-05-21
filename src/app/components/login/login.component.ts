import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const userr = res.find((a:any)=>{
        return a.user === this.loginForm.value.user && a.password === this.loginForm.value.password
      });
      if(userr){
        alert("Login Success!!");
        this.loginForm.reset();
        this.router.navigate(['header'])
      }else{
        alert("user not found!!");
      }
    },err=>{
      alert("Something went wrong!!")
    })
  }



}
