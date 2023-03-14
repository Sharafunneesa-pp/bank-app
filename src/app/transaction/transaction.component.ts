import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  // login acno
  acno:any
  // to hold transaction array
  transaction:any

  constructor(private  ds:DataService){
// get login acno from dataservice
this.acno=this.ds.currentAcno
// get transaction array from data service
this.transaction=this.ds.getTransaction(this.acno)
console.log(this.transaction)

  }

}
