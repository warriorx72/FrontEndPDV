import { Injectable, Type } from '@angular/core';
import {EMPRESAS} from './empresas.json';
import {Empresa} from './empresa';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private urlEndPoint =  'http://localhost:8080/api/empresas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getEmpresas(): Observable <Empresa[]>{
    return this.http.get<Empresa[]>(this.urlEndPoint);
  }

  postEmpresas(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.urlEndPoint, empresa, {headers: this.httpHeaders});
  }
  getEmpresa(id: any): Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlEndPoint}/${id}`);
  }
  putEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.put<Empresa>(`${this.urlEndPoint}/${empresa.id}`, empresa, {headers: this.httpHeaders});
  }
  deleteEmpresa(id: any): Observable<Empresa>{
    return this.http.delete<Empresa>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}
