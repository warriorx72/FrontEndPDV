import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public empresa: Empresa = new Empresa();
  public titulo = 'Crear Empresa';
  constructor(private empresaService: EmpresaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEmpresa();
  }


  cargarEmpresa(): void{

    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if (id){
          this.empresaService.getEmpresa(id).subscribe(
            (empresa) => this.empresa = empresa
          );
        }
      }
    );
  }

  public create(): void
  {
    this.empresaService.postEmpresas(this.empresa)
      .subscribe(
        empresa => {
                  this.router.navigate(['/empresas']);
                  swal.fire(
                      'Nueva Empresa', 'Empresa ' + empresa.idText + ' creada con exito!', 'success'
                  );
                }
    );
  }
  public update(): void
  {
    this.empresaService.putEmpresa(this.empresa)
      .subscribe(
        empresa => {
                  this.router.navigate(['/empresas']);
                  swal.fire(
                      'Empresa Actualizda', 'Empresa ' + empresa.idText + ' actualizada con exito!', 'success'
                  );
                }
    );
  }
}
