import ApiService from "../baseapi";

export class ApiUser extends ApiService {

   constructor() {
      super('user');
   }

   async logar(ob: Login) {
      console.log(ob)
      let res = '0'
      await this.postS('login', ob).then((response) => {
         res = response.data
      })
         .catch((erro) => {
            console.log(erro)
         });
      return res
   }
}
