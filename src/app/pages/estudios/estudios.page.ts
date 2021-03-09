import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Body } from '../../models/body.models';
import { Estudio } from '../../models/estudio.model';
import { DataService } from '../../services/data.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
})
export class EstudiosPage implements OnInit {

  title: string = history.state.name;
  err_msg: string;

  logoData = null;
  tache = null;
  palomita = null;

  craneo5x5_1 = null;
  craneo5x5_2 = null;
  craneo8x8_1 = null;
  craneo8x8_2 = null;
  craneo12x9_1 = null;
  craneo12x9_2 = null;
  craneo15x17_1 = null;
  craneo15x17_2 = null;

  public estudio: Estudio = new Estudio();
  public body: Body = new Body();


  constructor( public emailComposer: EmailComposer, public service: DataService, public router: Router) { }

  ngOnInit() {
  }

  prepareEmail(formulario) {

    const formValue = formulario.value;

    let estudio: string = "";

    for(let key in formValue) {
      let child = formValue[key];
      if (key != 'doctorName' && key != 'emailDoctor' && key != 'pacienteName' && key != 'emailPaciente' && key != 'pacienteTelefono') {
        if(child != undefined) {
          //console.log(key);  
          estudio = estudio + this.getRealName(key) + ',';
        }                
      }
      }

    console.log(formValue);
    console.log(this.estudio);

    this.body.nombreDoctor = this.estudio.doctorName;
    this.body.emailDoctor = this.estudio.emailDoctor;
    this.body.nombrePaciente = this.estudio.pacienteName;
    this.body.emailPaciente = this.estudio.emailPaciente;
    this.body.telefonoPaciente = this.estudio.pacienteTelefono;
    this.body.estudios = estudio;

    //console.log(this.body);
   this.service.crearRequerimiento(this.body);
   
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Requerimiento creado y enviado por correo a Dimatech!!',
    showConfirmButton: false,
    timer: 5500
  }).then((result) => {
    this.router.navigate(['/home'])
  });

  
  }

  getRealName(estudioid: string) {

    switch (estudioid) {
      case 'ortodoncia2d':        
        return 'Ortodoncia 2D';
      case 'ortodoncia3d':        
        return 'Ortodoncia 3D';
      case 'atm3d':        
        return 'ATM 3D';

      case 'tomografiaOrtodoncia':        
        return 'Tomografía Ortodoncía';
      case 'tomografiaSenosParanasales':        
        return 'Tomografía de Senos Paranasales';
      case 'tomografiaViasAereas':        
        return 'Tomografía de Vias Aéreas';
      case 'tomografiaCirugia':        
        return 'Tomografía de Cirugía';
      case 'tomografiaImplantes':        
        return 'Tomografía para Implantes';
      case 'tomografiaEndodoncia':        
        return 'Tomografía Endodoncia';
      case 'bocaAbierta':        
        return 'Boca Abierta';
      case 'bocaCerrada':        
        return 'Boca Cerrada';
      case 'comparativa':        
        return 'Comparativa';
      case 'area5x5':        
        return '5x5';
      case 'area8x8':        
        return '8x8';
      case 'area12x9':        
        return '12x9';
      case 'area15x17':        
        return '15x17';

        case 'oclusal':        
        return 'Oclusal';

        case 'maxilar':        
        return 'Maxilar';

        case 'mandibula':        
        return 'Mandibula';

        case 'lateralCraneo':        
        return 'Lateral de Craneo (Cefalométrico)';

        case 'ortopantomografia':        
        return 'Ortopantomografía (Panorámico)';

        case 'ortopantomografiaSinJig':        
        return 'Ortopantomografía (Paronámico sin JIG de mordida)';

        case 'ortopantomografiaDigital':        
        return 'Ortopantomografía (Digital)';

        case 'ortopantomografiaFisico':        
        return 'Ortopantomografía (Fisico)';

        case 'panoramicaSenos':        
        return 'Panorámica de Senos Maxilares';

        case 'atmLateral':        
        return 'ATM Lateral abierta y cerrada';
        case 'posteroAnterior':        
        return 'Postero Anterior';

        case 'anteroPosterior':        
        return 'Antero Posterior';

        case 'carpal':        
        return 'Carpal (mano)';

        case 'atmAnteroposterior':        
        return 'ATM Anteroposterior';

        case 'lateralSenosParanasales':        
        return 'Lateral de Senos Paranasales';

        case 'yeso':        
        return 'Yeso';

        case 'zocaloPlastico':        
        return 'Zócalo de Plástico';

        case 'recortadoModelos':        
        return 'Recortado de Modelos';

        case 'modelos3dresina':        
        return 'Postero Anterior';

        case 'modelos3dStl':        
        return 'Modelos 3D Digitales "stl"';

        case 'conZocalo':        
        return 'Con Zocalo';

        case 'sinZocalo':        
        return 'Sin Zocalo';

        case 'lateralCraneoCompleta':        
        return 'Lateral de craneo completa'; 

        case 'duplicadoModelos':        
        return 'Duplicado para Modelos';
        case 'segmento':        
        return 'Segmentado';
        case 'd3':        
        return '3d';
        case 'paquete1':        
        return 'Paquete 1';
        case 'paquete2':        
        return 'Paquete 2';
        case 'paquete3':        
        return 'Paquete 3';   
      default:
        break;
    }
  }

}
