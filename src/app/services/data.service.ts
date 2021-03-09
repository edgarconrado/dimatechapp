
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Casos } from '../interfaces/casos';
//import { HttpClient, Headers, RequestOptions } from '@angular/common/http';

import { Componente } from '../interfaces/interface';
import { Servicios } from '../interfaces/servicios';
import { Sucursales } from '../interfaces/sucursales';
import { Observable, of } from 'rxjs';
import { Registro } from '../models/registro.model';
import { URL_BACKEND } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlEndPoint: string = URL_BACKEND + 'api/v1/requerimientos';
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor( private http: HttpClient,
              private navCtrl: NavController ) { }

  getMenuOpt() {
    return this.http.get<Componente[]>('../../assets/data/menu-opts.json');
  }

  getServiciosOpt() {
    return this.http.get<Servicios[]>('../../assets/data/servicios-opts.json');
  }

  getCasosOpt() {
    return this.http.get<Casos[]>('../../assets/data/casos-opts.json');
  }

  getSucursalesOpt() {
    return this.http.get<Sucursales[]>('../../assets/data/sucursales-opts.json');
  }

  abrirRegistro(mapa: string) {
    this.navCtrl.navigateForward(mapa);
  }

  abrirRegistro2() {
    this.navCtrl.navigateForward(`/direccion/mapa/geo:20.7505743,-105.3246019`);
  }


  public crearRequerimiento(body) {

      return this.http.post(this.urlEndPoint,body,this.httpHeader).toPromise();   
    
 }

 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

/*
 sendPostRequest() {
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  const requestOptions = new RequestOptions({ headers: headers });

  let postData = {
          "name": "Customer004",
          "email": "customer004@email.com",
          "tel": "0000252525"
  }

  this.http.post("http://127.0.0.1:3000/customers", postData, requestOptions)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
}*/

}
