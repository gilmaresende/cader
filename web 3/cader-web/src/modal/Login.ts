import { BaseEntity } from "./BaseEntity";

export interface Login extends BaseEntity {
   username: string,
   password: string
}