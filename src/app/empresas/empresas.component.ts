import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  public empresas:Empresa[];
  constructor(private empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
      empresas => this.empresas=empresas
    );
  }

  public delete(empresa: Empresa): void
  {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar la empresa ${empresa.nombreRazonSocial}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.empresaService.deleteEmpresa(empresa.id).subscribe(
          response => {
            this.empresas = this.empresas.filter(emp => emp !== empresa);
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Empresa ${empresa.nombreRazonSocial} eliminada con exito!`,
              'success'
            );
          }
        );
      }
    });
  }

}
