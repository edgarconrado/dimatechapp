import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SlideshowButtonComponent } from './slideshow-button/slideshow-button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ 
    SlideshowButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports: [
    SlideshowButtonComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
