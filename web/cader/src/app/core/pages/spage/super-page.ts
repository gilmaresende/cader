import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';
import { StatePage } from '../../enuns/statePage';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { FactoryCoreService } from '../../services/factory-core.service';
import { PagesService } from '../../services/pages.service';

export abstract class SPage<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  ob?: Entidade;
  form!: FormGroup;

  isDisabled: ObservableElement = new ObservableElement();

  formBuilder: FormBuilder;
  servicePage: PagesService;
  superOb?: SEntidade;
  constructor(
    title: string,
    private services: Service,
    private factoryCoreService: FactoryCoreService,
    private activatedRoutes: ActivatedRoute
  ) {
    this.instanceList();
    this.formBuilder = factoryCoreService.getFormBuilder();
    this.servicePage = factoryCoreService.getSuperControl();

    this.servicePage.setTitle(title);
    this.servicePage.setService(this.services);
    this.servicePage.setIsDisabled(this.isDisabled);
    this.servicePage.setPageEntity(this);

    const id = this.activatedRoutes.snapshot.params['id'];
    this.buildFormBase();
    this.newOb();
    if (id) {
      this.findById(id);
      this.servicePage.setStatePage(StatePage.VIEW);
    }
  }

  newOb() {
    this.servicePage.setStatePage(StatePage.INSERT);
    this.ob = this.services.newInstance();
    this.superOb = this.ob;
    this.populatedForm(this.ob);
  }

  buildFormBase() {
    this.form = this.formBuilder.group({});
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
  }

  async findById(id: number) {
    this.servicePage.loading.showLoading();

    await this.services.findById(id).subscribe({
      next: (res) => {
        this.superOb = res.data;
        this.setOb(res.data);
        this.populatedForm(res.data);
        this.servicePage.setStatePage(StatePage.VIEW);
        this.isDisabled.emmiter(true);

        this.servicePage.loading.dropLoading();
      },
      error: (error) => {
        console.log(error);
        if (error.error) {
          this.servicePage.toastService!.showAlert(error.error.error);
        } else {
          console.log(error);
        }
        this.servicePage.loading.dropLoading();
        this.servicePage.getRouter().navigate([`cader/${this.services.rote}`]);
      },
    });
  }

  public clearScreen() {
    this.buildFormBase();
    this.isDisabled.emmiter(false);
  }

  public setIsDisabled(valueIsDisable: boolean) {
    this.isDisabled.emmiter(valueIsDisable);
  }

  public getSuperOb(): SEntidade {
    return this.superOb!;
  }

  abstract populatedForm(ob: Entidade): any;

  abstract getOb(): Entidade;

  instanceList() {}
}
