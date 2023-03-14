import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// to hold user account number
acno=""
// to hold password
pswd=""
// properties / variable declaration.
  aim='Your perfect banking partner'

  account='Account number here'
// // database
//   userDetails:any={
//     1000:{acno:1000,username:"neer",password:1000,balance:5000},
//     1001:{acno:1001,username:"lasha",password:1001,balance:6000},
//     1002:{acno:1002,username:"ammu",password:1002,balance:5000},

//   }

// constructor - Dependency injection

constructor (private router:Router,private ds:DataService){


}

// // acnochange

// acnoChange(event:any){
// this.acno=event.target.value
// console.log(this.acno)

// }




// // pswrchnge
// pswdChange(event:any){
//   this.pswd=event.target.value
//   console.log(this.pswd)
  
//   }


  // login
  login()
  {
    var acno=this.acno
    var pswd=this.pswd
    const result=this.ds.login(acno,pswd)
    // let userDetails=this.userDetails



    if(result)
    {
      alert("login successfully")
      this.router.navigateByUrl('dashboard')
    }
    }
  





// one way databinding

  // login(a:any,p:any)
  // {
  //   var acno=a.value
  //   var pswd=p.value
  //   let userDetails=this.userDetails
  //   if(acno in userDetails)
  //   {
  //     if(pswd==userDetails[acno]['password'])
  //     {
  //       alert("Login successfully")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("user doesnot exist")
  //   }
  // }
}
// properties / variables
// constructor- for objects  values initialisation.
// when an object is created it invoked automatically


