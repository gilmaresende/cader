import { ActivatedRoute } from '@angular/router';
import { StatePage } from '../../enuns/statePage';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';

export abstract class SPage<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  ob?: Entidade;

  isDisabled: boolean = true;

  constructor(
    title: string,
    private actions: ControlService,
    private services: Service,
    private activatedRoutes: ActivatedRoute
  ) {
    actions.build(this.ob, title, this, this.services);
    this.startView();

    const id = this.activatedRoutes.snapshot.params['id'];
    if (id) {
      this.findById(id);
      this.actions.setStatePage(StatePage.VIEW);
    } else {
      this.actions.setStatePage(StatePage.INSERT);
    }
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
    this.actions.setOb(ob);
  }

  async findById(id: number) {
    this.actions.loading.showLoading();
    await this.services.findById(id).subscribe({
      next: (res) => {
        this.setOb(res.data);
        this.populatedForm(res.data);
        this.actions.setStatePage(StatePage.VIEW);
        this.actions.loading.dropLoading();
      },
      error: (error) => {
        if (error.error) {
          this.actions.toastService!.showAlert(error.error.error);
        } else {
          console.log(error);
        }
        this.actions.loading.dropLoading();
        this.actions.getRouter().navigate([`cader/${this.services.rote}`]);
      },
    });
  }

  public clearScreen() {
    this.isDisabled = false;
  }

  public setIsDisabled(valueIsDisable: boolean) {
    this.isDisabled = valueIsDisable;
  }

  findFilter(filter: any) {}

  startView() {}

  abstract populatedForm(ob: Entidade): any;

  abstract getOb(): Entidade;
}
