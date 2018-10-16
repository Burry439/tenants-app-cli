import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Tenant } from '../shared/tenant';
import { TenantsService } from '../services/tenants.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {


//// output and event emitter are for sending events to the parent component

  @Output() deleteTenant = new EventEmitter<any>()

//// input is for reciving data from the parent component

  @Input() tenant:Tenant

  constructor(private tenantService : TenantsService) { }


  display: boolean = false;


    //// a simple function for displaying a Dialog

  showDialog() {
      this.display = true;
  }


/// tells it parent component to delete a tenant

  delete(id)
  {
    this.tenantService.deleteTenant(id).subscribe((res)=>{
        this.deleteTenant.emit(id)
        this.display = false
    })
  }


  ngOnInit() {
  }

}
