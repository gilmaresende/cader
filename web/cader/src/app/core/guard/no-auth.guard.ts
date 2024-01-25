import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = new Router();

  if (inject(AuthServiceService).isAutenticated()) {
    router.navigate(['cader/home']);
    return false;
  }
  return true;
};
