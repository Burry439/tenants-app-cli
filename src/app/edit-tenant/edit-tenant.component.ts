import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from '../services/tenants.service';
import { Tenant } from '../shared/tenant';



@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.css']
})
export class EditTenantComponent implements OnInit {


    tenant:Tenant

  constructor(private ar: ActivatedRoute, private router : Router , private tenantsService: TenantsService) { }



//// tells the tenants service to tell the node server to update this tenant with the information filled out on the form

  confirmChange(id, form)
  {

    let tenant = new Tenant(
      id,
      form.value.name,
      form.value.address,
      form.value.phone,
      form.value.debt,
    )


    return this.tenantsService.editTenant(tenant).subscribe((res:Tenant)=>{

      this.router.navigate(['/tenants'])  
        

    })

  }



  ngOnInit() {

    this.ar.params.subscribe(id =>{
          this.tenantsService.getTenant(id.id).subscribe((res:Tenant)=>{
          this.tenant = res
        })
        
    })

  }

}
