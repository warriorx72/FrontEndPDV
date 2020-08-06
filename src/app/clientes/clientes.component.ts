import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  public clientes :Cliente[];
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes=clientes
    );
  }

}
