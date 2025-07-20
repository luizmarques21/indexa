import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormularioContatoComponent} from "./paginas/formulario-contato/formulario-contato.component";
import {ListaContatosComponent} from "./paginas/lista-contatos/lista-contatos.component";
import {RouterOutlet} from "@angular/router";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormularioContatoComponent,
    ListaContatosComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
