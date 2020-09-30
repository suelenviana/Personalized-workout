import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoTreinoPageRoutingModule } from './novo-treino-routing.module';

import { NovoTreinoPage } from './novo-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoTreinoPageRoutingModule
  ],
  declarations: [NovoTreinoPage]
})
export class NovoTreinoPageModule {}
