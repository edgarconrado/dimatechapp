import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interface';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

import { LlamanosPage } from '../../pages/llamanos/llamanos.page'

@Component({
  selector: 'app-slideshow-button',
  templateUrl: './slideshow-button.component.html',
  styleUrls: ['./slideshow-button.component.scss'],
})
export class SlideshowButtonComponent implements OnInit {

  componentes: Observable<Componente[]>;

   slideOpts: any = {
      slidesPerView: 3.3,
      freeMode: true,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row'
   };
  
  constructor(  private dataService: DataService, private route: Router ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpt();
  }

  onClick( c ) {
    console.log( c );
    this.route.navigate([c.redirectTo], { state: { name: c.name }  });
  }

}
