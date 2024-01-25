import { Component } from '@angular/core';
import { PagesService } from 'src/app/core/services/pages.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  isLoading: boolean = false;

  constructor(private controller: PagesService) {
    controller.setLoading(this);
  }

  showLoading() {
    this.isLoading = true;
  }

  dropLoading() {
    this.isLoading = false;
  }
}
