import { Component } from '@angular/core';
import { PagesService } from 'src/app/core/services/pages.service';
import { HttpServerService } from 'src/app/core/services/http-server.service';

@Component({
  selector: 'app-teste-hql',
  templateUrl: './teste-hql.component.html',
  styleUrls: ['./teste-hql.component.scss'],
})
export class TesteHqlComponent {
  constructor(
    private controller: PagesService,
    private http: HttpServerService
  ) {
    controller.setTitle('Teste HQL');
  }

  ob: { query: string } = { query: '' };

  consult() {
    this.http.post('query/csv', this.ob).subscribe({
      next: (res) => {
        const blobUrl = URL.createObjectURL(res);

        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = 'DOWNLOAD_FILE.CSV';
        downloadLink.click();
        downloadLink.remove();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
