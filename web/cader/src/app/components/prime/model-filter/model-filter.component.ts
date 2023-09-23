import { Component } from '@angular/core';
import { ModelFilterService } from './model-filter.service';

@Component({
  selector: 'model-filter',
  templateUrl: './model-filter.component.html',
  styleUrls: ['./model-filter.component.scss'],
})
export class ModelFilterComponent {
  visible: boolean = false;

  constructor(private modelFilterService: ModelFilterService) {
    modelFilterService.setModal(this);
  }

  showDialog() {
    this.visible = !this.visible;
  }

  toFilert() {
    this.modelFilterService.toFilter();
  }

  //fecha o modal
  closeModal() {
    this.visible = false;
  }
}
