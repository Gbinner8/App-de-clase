import { Component } from '@angular/core';
import { categorias } from '../core/interfaces/categoria';
import { CATEGORIAS } from '../core/constants/categorias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  categorias=CATEGORIAS
}