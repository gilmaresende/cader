import { ActivatedRoute } from '@angular/router';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';

export abstract class SPage<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  public ob?: Entidade;

  loading: boolean = true;

  constructor(
    title: string,
    private actions: ControlService,
    private services: Service,
    private activatedRoutes: ActivatedRoute
  ) {
    actions.build(this.ob, title, this, this.services);

    const id = this.activatedRoutes.snapshot.params['id'];
    if (id) {
      this.findById(id);
    }
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
    this.actions.setOb(ob);
  }

  findById(id: number) {
    this.actions.showLoadingTrue();
    this.actions.service.findById(id).subscribe({
      next: (res) => {
        this.setOb(res.data);
        this.actions.showLoadingFalse();
      },
      error: (error) => {
        console.log(error);
        this.actions.showLoadingFalse();
      },
    });
  }

  public alterLoading(isLoading: boolean) {
    this.loading = isLoading;
  }
}
