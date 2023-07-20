import axios from "axios";
import { getToken, isLog } from "../services/login/service";

const httpClient = axios.create({
   baseURL: `http://localhost:8080/`,
});

class ApiBase {

   private apiurl: string
   private header = {}

   constructor(apiurl: string) {
      this.apiurl = apiurl;
      this.header = {
         headers: {
            'Authorization': `Bearer ${getToken()}`
         }
      }
   }

   postS(url: string, ob: any) {
      const requestUrl = `${this.apiurl}/${url}`;
      if (isLog())
         return httpClient.post(requestUrl, ob, this.header);
      return httpClient.post(requestUrl, ob);
   }

   putS(id: number, ob: any) {
      const requestUrl = `${this.apiurl}/${id}`;
      return httpClient.put(requestUrl, ob, this.header);
   }

   deleteS(id: number) {
      const requestUrl = `${this.apiurl}/${id}`;
      return httpClient.delete(requestUrl, this.header);
   }

   getIdS(id: number) {
      const requestUrl = `${this.apiurl}/${id}`;
      return httpClient.get(requestUrl, this.header);
   }

   getS(url: string) {
      return httpClient.get(url);
   }
}

export default ApiBase;