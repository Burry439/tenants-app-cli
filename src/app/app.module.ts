
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import { FormsModule }   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




///// primeNG Modules and services
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
















import { SearchComponent } from './search/search.component';
import { EditTenantComponent } from './edit-tenant/edit-tenant.component';
import { AppComponent } from './app.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantComponent } from './tenant/tenant.component';


//// here i define all the apps routes and what components should be loaded

const appRoutes:Routes = [
  {path: '', redirectTo:'tenants', pathMatch:'full'},  
  {path: 'tenants', component: TenantsComponent},
  {path: 'tenant/:id', component: EditTenantComponent},
]

/////////////////////////////////////////////////////


@NgModule({
  declarations: [
    AppComponent,
    TenantsComponent,
    TenantComponent,
    SearchComponent,
    EditTenantComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule, 
    DialogModule,
    BrowserAnimationsModule,
    GrowlModule,
    MessagesModule,
    MessageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
