import { Component } from '@angular/core';

@Component({ 
    selector: 'ng-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
     })
export class FooterComponent {
    public autor:any={nombre:'Uriel',apellidoPaterno:'Cuatepitzi',apellidoMaterno:'Flores'}
}