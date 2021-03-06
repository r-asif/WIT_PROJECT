import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

import { TreeModule } from '@circlon/angular-tree-component';
import { AboutComponent } from '../about/about.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, TreeModule]
})
export class HomeModule {}
