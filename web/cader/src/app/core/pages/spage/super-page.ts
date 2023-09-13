import { ActivatedRoute } from '@angular/router';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';
import { StatePage } from '../../enuns/statePage';

export abstract class SPage<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  ob?: Entidade;

  loading: boolean = true;
  isDisabled: boolean = true;

  constructor(
    title: string,
    private actions: ControlService,
    private services: Service,
    private activatedRoutes: ActivatedRoute
  ) {
    this.actions.showLoadingTrue();
    actions.build(this.ob, title, this, this.services);

    const id = this.activatedRoutes.snapshot.params['id'];
    if (id) {
      this.findById(id);
      this.actions.setStatePage(StatePage.VIEW);
    } else {
      this.actions.setStatePage(StatePage.INSERT);
      this.setOb(this.services.newInstance());
      this.actions.showLoadingFalse();
    }
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
    this.actions.setOb(ob);
  }

  async findById(id: number) {
    this.actions.showLoadingTrue();
    await this.actions.service.findById(id).subscribe({
      next: (res) => {
        this.setOb(res.data);
        this.actions.showLoadingFalse();
        this.actions.setStatePage(StatePage.VIEW);
      },
      error: (error) => {
        if (error.error) {
          this.actions.toastService!.showAlert(error.error.error);
        } else {
          console.log(error);
        }
        this.actions.getRouter().navigate([`cader/${this.services.rote}`]);
      },
    });
  }

  public alterLoading(isLoading: boolean) {
    this.loading = isLoading;
  }

  public clearScreen() {
    this.ob = this.services.newInstance();
    this.isDisabled = false;
  }

  public setIsDisabled(valueIsDisable: boolean) {
    this.isDisabled = valueIsDisable;
  }

  findFilter(filter: any) {}
}
