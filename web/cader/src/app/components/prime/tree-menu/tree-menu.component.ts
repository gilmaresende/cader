import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss'],
})
export class TreeMenuComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', command: () => this.toGoHome() },
      {
        label: 'Cadastros',
        items: [
          {
            label: 'Categoria Despesa',
            command: () => this.toGo('expenseCategory'),
          },
          { label: 'Pessoa', command: () => this.toGo('person') },
        ],
      },
      {
        label: 'Controladoria',
        items: [
          { label: 'Despesa', command: () => this.toGo('carteira') },
          { label: 'Receita', command: () => this.toGo('pessoa') },
          { label: 'Movimento', command: () => this.toGo('pessoa') },
        ],
      },
      {
        label: 'Relatórios',
        items: [
          { label: 'A pagar', command: () => this.toGo('carteira') },
          { label: 'A receber', command: () => this.toGo('pessoa') },
          { label: 'Movimentos', command: () => this.toGo('pessoa') },
        ],
      },
      {
        label: 'Perfil',
        items: [
          { label: 'Editar', command: () => this.toGo('perfil') },
          { label: 'Sair', command: () => this.logout() },
        ],
      },
    ];
  }

  private toGo(rote: string) {
    this.router.navigate([`cader/${rote}/list`]);
  }
  private toGoHome() {
    this.router.navigate([`cader/home`]);
  }

  private logout() {
    this.authService.logout();
  }
}
