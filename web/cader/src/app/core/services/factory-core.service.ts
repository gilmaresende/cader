import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ControlService } from './control.service';

@Injectable({
  providedIn: 'root',
})
export class FactoryCoreService {
  constructor(
    private formBuilder: FormBuilder,
    private controller: ControlService
  ) {
    this.formBuilder = formBuilder;
  }

  getFormBuilder(): FormBuilder {
    return this.formBuilder;
  }

  getSuperControl(): ControlService {
    return this.controller;
  }
}
