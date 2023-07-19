import { BaseEntity } from "@/modal/BaseEntity";
import axios from "axios";

const httpClient = axios.create({
   baseURL: `http://localhost:8080/`,
});

class ApiService<Entity extends BaseEntity> {

   private apiurl: string

   constructor(apiurl: string) {
      this.apiurl = apiurl;
   }

   postOb(url: string, ob: any) {
      const requestUrl = `${this.apiurl}/${url}`;
      console.log(requestUrl)
      return httpClient.post(requestUrl, ob);
   }

   post(url: string, ob: any) {
      return httpClient.post(url, ob);
   }

   put(ob: Entity) {
      const requestUrl = `${this.apiurl}/${ob.id}`;
      return httpClient.put(requestUrl, ob);
   }

   delete(ob: Entity) {
      const requestUrl = `${this.apiurl}/${ob.id}`;
      return httpClient.delete(requestUrl);
   }

   getId(id: number) {
      const requestUrl = `${this.apiurl}/${id}`;
      return httpClient.get(requestUrl);
   }

   get(url: string) {
      return httpClient.get(url);
   }

}

export default ApiService;