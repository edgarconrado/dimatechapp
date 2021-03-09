import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Sucursales } from 'src/app/interfaces/sucursales';

@Component({
  selector: 'app-llamanos',
  templateUrl: './llamanos.page.html',
  styleUrls: ['./llamanos.page.scss'],
})
export class LlamanosPage implements OnInit {

  title: string = history.state.name;
  sucursales: Observable<Sucursales[]>;

  constructor( private dataService: DataService, private callNumber: CallNumber ) { }

  ngOnInit() {
    this.sucursales = this.dataService.getSucursalesOpt();
    
  }

  phoneSucursal( phoneNumber: string) {
    //this.callNumber.callNumber(phoneNumber, true);

    window.open(`tel:${phoneNumber}`, '_system')

  }

}
