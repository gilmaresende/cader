import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[twoDecimalMask]',
})
export class TwoDecimalMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;

    const inputValue = input.value;
    const cleanValue = inputValue
      .replace(/[^\d.]/g, '')
      .replace(/(\..*?)\..*/g, '$1');

    const parsedNumber = parseFloat(cleanValue);
    input.value = parsedNumber.toFixed(2);
  }
}
