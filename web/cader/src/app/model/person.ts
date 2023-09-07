import { SEntidade } from 'src/app/core/model/sentidade';

export interface Person extends SEntidade {
  name: string;
  active: number;
}
