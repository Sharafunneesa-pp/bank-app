import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
uname=""
acno=""
pswd=""

constructor(private ds:DataService,private router:Router){

}



// user defined should be in last

register()
{
  var uname=this.uname
  var acno=this.acno
  var pswd=this.pswd
  // call register in data service

  const result=this.ds.register(acno,pswd,uname)
  if(result)
  {
    alert("Successfully registered")
    this.router.navigateByUrl("")


  }
  else{
    alert("user already exist..please login")
    this.router.navigateByUrl("")
  }
}
}
