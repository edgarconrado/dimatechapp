import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Servicios } from '../../interfaces/servicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  
  title: string = history.state.name;
  servicios: Observable<Servicios[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.servicios = this.dataService.getServiciosOpt();
  }

  showMap() {
    //this.dataService.abrirRegistro();
  }

  openFacebook() {
    window.open('https://www.facebook.com/Dimatech-105177517639131', "_system");
  }

}
