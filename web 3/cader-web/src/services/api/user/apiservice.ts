import httpClient from "../baseapi";
const rote = 'user'

const fLogar =
   async function logar(ob: Login) {
      const url = `${rote}/login`
      const res = httpClient.post(url, ob);
      return res
   }
export default fLogar