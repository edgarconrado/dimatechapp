import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { LlamanosPageRoutingModule } from './llamanos-routing.module';
import { LlamanosPage } from './llamanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlamanosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LlamanosPage]
})
export class LlamanosPageModule {}
