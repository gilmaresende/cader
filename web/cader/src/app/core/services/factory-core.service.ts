import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PagesService } from './pages.service';

@Injectable({
  providedIn: 'root',
})
export class FactoryCoreService {
  constructor(
    private formBuilder: FormBuilder,
    private controller: PagesService
  ) {
    this.formBuilder = formBuilder;
  }

  getFormBuilder(): FormBuilder {
    return this.formBuilder;
  }

  getSuperControl(): PagesService {
    return this.controller;
  }
}
