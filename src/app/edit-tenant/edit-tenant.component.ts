import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from '../services/tenants.service';
import { Tenant } from '../shared/tenant';
import {MessageService} from 'primeng/components/common/messageservice';



@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.css']
})
export class EditTenantComponent implements OnInit {

  @ViewChild('f')tenantEditForm:NgForm

    tenant:Tenant

  constructor(private ar: ActivatedRoute, private tenantsService: TenantsService,private messageService: MessageService) { }



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

      console.log(res)
      this.messageService.add({severity:'success', summary:'Tenant Edited', detail:'You edited ' + tenant.name + " he is now " + res.name});
      this.tenant = res
      this.tenantEditForm.reset()


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
