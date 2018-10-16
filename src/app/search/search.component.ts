import { Component, OnInit, Input } from '@angular/core';
import { Tenant } from '../shared/tenant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


//// input is for reciving data from the parent component

  @Input()tenants:Array<Tenant>

  search:String

  foundTenants:Array<Tenant>

  noneFound:boolean

  constructor() { } 


  ///filters the array to return tenants whos name fits the search criteria 

  find()
  {   
    
    this.foundTenants  = this.tenants.filter((tenant)=>{
       return tenant.name.toLowerCase().includes(this.search.toLowerCase())
    })
  }



  ngOnInit() {
  }

}
