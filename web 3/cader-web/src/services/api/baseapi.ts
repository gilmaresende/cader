import { BaseEntity } from "@/modal/BaseEntity";
import axios from "axios";
import { getToken, isLog } from "../services/login/service";

const httpClient = axios.create({
   baseURL: `http://localhost:8080/`,
});

class ApiService<Entity extends BaseEntity> {

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

   post(url: string, ob: any) {
      const requestUrl = `${this.apiurl}/${url}`;
      if (isLog())
         return httpClient.post(requestUrl, ob, this.header);
      return httpClient.post(requestUrl, ob);
   }

   put(ob: Entity) {
      const requestUrl = `${this.apiurl}/${ob.id}`;
      return httpClient.put(requestUrl, ob, this.header);
   }

   delete(ob: Entity) {
      const requestUrl = `${this.apiurl}/${ob.id}`;
      return httpClient.delete(requestUrl, this.header);
   }

   getId(id: number) {
      const requestUrl = `${this.apiurl}/${id}`;
      return httpClient.get(requestUrl, this.header);
   }

   get(url: string) {
      return httpClient.get(url);
   }
}

export default ApiService;