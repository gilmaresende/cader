import { ActivatedRoute } from '@angular/router';
import { StatePage } from '../../enuns/statePage';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';
import { OnInit } from '@angular/core';
import { FactoryCoreService } from '../../services/factory-core.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

export abstract class SPage<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  ob?: Entidade;
  form!: FormGroup;

  isDisabled: ObservableElement = new ObservableElement();

  formBuilder: FormBuilder;
  actions: ControlService;
  constructor(
    title: string,
    private services: Service,
    private factoryCoreService: FactoryCoreService,
    private activatedRoutes: ActivatedRoute
  ) {
    this.formBuilder = factoryCoreService.getFormBuilder();
    this.actions = factoryCoreService.getSuperControl();

    this.actions.getToolbar().title = title;
    this.actions.setService(this.services);
    this.actions.setIsDisabled(this.isDisabled);

    const id = this.activatedRoutes.snapshot.params['id'];
    this.buildFormBase();
    this.newOb();
    if (id) {
      this.findById(id);
      this.actions.setStatePage(StatePage.VIEW);
    }
  }

  newOb() {
    this.actions.setStatePage(StatePage.INSERT);
    this.ob = this.services.newInstance();
    this.populatedForm(this.ob);
  }

  buildFormBase() {
    this.form = this.formBuilder.group({});
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
  }

  async findById(id: number) {
    console.log('fng', id);
    this.actions.loading.showLoading();
    await this.services.findById(id).subscribe({
      next: (res) => {
        this.setOb(res.data);
        this.populatedForm(res.data);
        this.actions.setStatePage(StatePage.VIEW);
        this.isDisabled.emmiter(true);
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
    this.buildFormBase();
    this.isDisabled.emmiter(false);
  }

  public setIsDisabled(valueIsDisable: boolean) {
    this.isDisabled.emmiter(valueIsDisable);
  }

  abstract populatedForm(ob: Entidade): any;

  abstract getOb(): Entidade;
}
