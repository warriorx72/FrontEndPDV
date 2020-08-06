import { RouterModule, Routes } from '@angular/router';
import { ClienteService } from './clientes/cliente.service';
import { EmpresaService } from './empresas/empresa.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http'
import {EmpresasComponent} from './empresas/empresas.component';
import { FormComponent } from './empresas/form.component'
import {FormsModule} from '@angular/forms'

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'empresas/form', component: FormComponent },
  { path: 'empresas/form/:id', component: FormComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    EmpresasComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    ClienteService,
    EmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
