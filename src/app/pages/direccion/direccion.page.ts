import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursales } from 'src/app/interfaces/sucursales';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.page.html',
  styleUrls: ['./direccion.page.scss'],
})

export class DireccionPage implements OnInit {

  title: string = history.state.name;
  sucursales: Observable<Sucursales[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.sucursales = this.dataService.getSucursalesOpt();
  }

  sucursal1(mapa: string) {
    this.dataService.abrirRegistro(mapa);
  }

  sucursal2() {
    this.dataService.abrirRegistro2();
  }

}
