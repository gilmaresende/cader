import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = new Router();

  if (!inject(AuthServiceService).isAutenticated()) {
    router.navigate(['']);
    return false;
  }
  return true;
};
