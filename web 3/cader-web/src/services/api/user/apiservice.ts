import ApiService from "../baseapi";

export class ApiUser extends ApiService<Login>{

   constructor() {
      super('user');
   }

   async logar(ob: Login) {
      console.log(ob)
      let res = '0'
      await this.postOb('login', ob).then((response) => {
         res = response.data
      })
         .catch((erro) => {
            console.log(erro)
         });
      return res
   }

   async logar1(ob: Login) {
      console.log(ob)
      await this.post('teste', ob).then((response) => {
         console.log(response)
      })
         .catch((erro) => {
            console.log(erro)
         });
   }
}
