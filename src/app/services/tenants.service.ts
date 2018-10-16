import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class TenantsService {

  constructor(private http : HttpClient) { }
  

/// makes an http call to get all tenants

  getTenants()
  {
    return this.http.get(environment.ws_url + 'tenants/getTenants')
  }

/// makes an http call to get one tenant by it id

  getTenant(id)
  {
    const headers = new HttpHeaders().set("tenantId", id)  
    return this.http.get(environment.ws_url + 'tenants/getTenant', {headers:headers})
  }

/// makes an http call to add a new tenant

  addTenant(tenant)
  {
    return this.http.post(environment.ws_url + 'tenants/addTenant', tenant)
  }

/// makes an http call to edit a tenant


  editTenant(tenant)
  {
    return this.http.put(environment.ws_url + 'tenants/editTenant', tenant)
  }

/// makes an http call to delete a tenant


  deleteTenant(id)
  {
    const headers = new HttpHeaders().set("id", id)
    return this.http.delete(environment.ws_url + 'tenants/deleteTenant', {headers})
  }


}
