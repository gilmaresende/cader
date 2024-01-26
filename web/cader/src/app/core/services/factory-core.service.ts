import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PagesService } from './pages.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FactoryCoreService {
  constructor(
    private formBuilder: FormBuilder,
    private controller: PagesService,
    private router: Router
  ) {
    this.formBuilder = formBuilder;
  }

  getFormBuilder(): FormBuilder {
    return this.formBuilder;
  }

  getSuperControl(): PagesService {
    return this.controller;
  }

  getRouter(): Router {
    return this.router;
  }
}
