import { Component } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  isLoading: boolean = false;

  constructor(private controller: ControlService) {
    controller.setLoading(this);
  }

  showLoading() {
    this.isLoading = true;
  }

  dropLoading() {
    this.isLoading = false;
  }
}
