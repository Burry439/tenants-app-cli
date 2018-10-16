import { Component, OnInit } from '@angular/core';
import { TenantsService } from '../services/tenants.service';
import { Tenant } from '../shared/tenant'

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  tenants:Array<Tenant>
  fillterdTenants:Array<Tenant> 
  filterType:String = 'All'
  display: boolean = false;

  constructor(private tenantsService : TenantsService) { }


  //// a simple function for displaying a Dialog

  showDialog()
  {
    this.display = true;
  }


  ///////// tells the tenantsService to tell the Node server to add a new tenant
  addTenant(tenant)
  { 
    this.tenantsService.addTenant(tenant.value).subscribe((res:Tenant)=>{
        this.tenants.push(res)
        this.display = false
    })
    
  }

  ///////// tells the tenantsService to tell the Node server to add a new tenant


  deleteTenant(id)
  {
    for(let i = 0; i < this.tenants.length; i++)
    {
      if(this.tenants[i]._id == id)
      {
        this.tenants.splice(i,1)
      }
    }
  }


////// here i filter the array to display the tenants based on whether or not they have any debt 0 is considered debt free

  toggleDisplayedTenents(value)
  {
      this.filterType = value

    if(value == 'All')
    {
        return this.fillterdTenants = this.tenants
    }

    else if (value == "With Debt")
    {
      this.fillterdTenants =  this.tenants.filter((tenent)=>{
        return tenent.debt > 0
       })
    }

    else if (value == "Without Debt")
    {
      this.fillterdTenants =  this.tenants.filter((tenent)=>{
        return tenent.debt == 0
       })
    }

  }


  ///////// tells the tenantsService to tell the Node server to get all tenants

  ngOnInit() 
  {

      this.tenantsService.getTenants().subscribe((res:Array<Tenant>)=>{
        this.tenants = res
        this.fillterdTenants = res
      })

  }

}
