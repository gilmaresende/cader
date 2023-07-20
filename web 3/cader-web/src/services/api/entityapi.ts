import { BaseEntity } from "@/modal/BaseEntity";
import ApiBase from "./baseapi";

class ApiEntity<Entity extends BaseEntity> extends ApiBase {

   constructor(apiurl: string) {
      super(apiurl)
   }

   save(ob: Entity) {
      if (ob.id) {
         super.putS(ob.id, ob)
      } else {
         super.postS('', ob)
      }
   }

   delete(ob: Entity) {
      if (ob.id)
         return super.deleteS(ob.id)
   }

   getId(id: number) {
      return super.getIdS(id)
   }

   getAll() {
      return super.postS('list', {})
   }

   filter() {
      return super.postS('list', {})
   }

   get(url: string) {
      return super.getS(url)
   }
}

export default ApiEntity;