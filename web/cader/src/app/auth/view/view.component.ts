import { Component } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  loading: boolean = false;

  constructor(private controller: ControlService) {
    controller.setSuperView(this);
  }

  public alterLoading(isLoading: boolean) {
    this.loading = isLoading;
  }
}
