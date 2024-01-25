import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[IkMoney]',
})
export class IkMoneyDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, ''); // Remove não dígitos

    // Converte para número e formata com duas casas decimais
    valor = (Number(valor) / 100).toFixed(2);

    // Atualiza o valor no input
    this.renderer.setProperty(input, 'value', valor);
  }
}
