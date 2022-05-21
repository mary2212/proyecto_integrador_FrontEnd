import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public singupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder,private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.singupForm = this.formBuilder.group({
      userId:[''],
      password:['']

    })    
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.singupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.singupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })
  }

}
