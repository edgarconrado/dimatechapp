import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Casos } from '../../interfaces/casos';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit {

  title: string = history.state.name;
  casos: Observable<Casos[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {    
    this.casos = this.dataService.getCasosOpt();
    console.log(this.casos);

  }

}
