import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  @Input() titulo: string = '';
  @Input() bannerSrc: string = '';
  @Input() telaInicial: boolean = false;
}
