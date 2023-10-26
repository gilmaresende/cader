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
      { label: 'Home', command: () => this.toGoPage('home') },
      {
        label: 'Cadastros',
        items: [
          {
            label: 'Cartão',
            command: () => this.toGo('card'),
          },
          {
            label: 'Carteira',
            command: () => this.toGo('wallet'),
          },
          {
            label: 'Categoria Despesa',
            command: () => this.toGo('expenseCategory'),
          },
          {
            label: 'Categoria Receita',
            command: () => this.toGo('incomeCategory'),
          },
          { label: 'Meio Pagamento', command: () => this.toGo('paymentType') },
          { label: 'Pessoa', command: () => this.toGo('person') },
        ],
      },
      {
        label: 'Controladoria',
        items: [
          { label: 'Movimento', command: () => this.toGo('movement') },
          { label: 'Despesa', command: () => this.toGo('expense') },
          {
            label: 'Entrada de Caixa',
            command: () => this.toGo('cashInflow'),
          },
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
        label: 'Dev',
        items: [
          { label: 'Teste HQL', command: () => this.toGoPage('testeHql') },
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
  private toGoPage(rote: string) {
    this.router.navigate([`cader/${rote}`]);
  }

  private logout() {
    this.authService.logout();
  }
}
