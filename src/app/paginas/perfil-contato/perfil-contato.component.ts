import {Component, OnInit} from '@angular/core';
import {ContainerComponent} from "../../componentes/container/container.component";
import {Contato} from "../../componentes/contato/contato";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ContatoService} from "../../services/contato.service";
import {SeparadorComponent} from "../../componentes/separador/separador.component";
import {CabecalhoComponent} from "../../componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    RouterLink
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    avatar: '',
    telefone: '',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }

  excluir() {
    if (this.contato.id) {
      this.contatoService.excluirContato(this.contato.id).subscribe(() => {
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }
}
