import { Component, Input, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'drop-dow',
  templateUrl: './drop-dow.component.html',
  styleUrls: ['./drop-dow.component.scss'],
})
export class DropDowComponent implements OnInit, DoCheck {
  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() ob: any;
  @Input() atributo: any = '';
  @Input() placeholder: string = '';

  @Input() list: Array<{ name: string; id?: number }> = [];

  selected: { name: string; id?: number } | undefined;

  ngOnInit() {}

  ngDoCheck(): void {
    if (this.ob && this.selected) this.ob[this.atributo] = this.selected!.id;
  }
}
