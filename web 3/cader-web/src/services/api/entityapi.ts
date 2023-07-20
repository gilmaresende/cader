import { BaseEntity } from "@/modal/BaseEntity";
import ApiBase from "./baseapi";

abstract class ApiEntity<Entity extends BaseEntity> extends ApiBase {

   constructor(apiurl: string) {
      super(apiurl)
   }

   async save(ob: Entity) {
      if (ob.id) {
         return await super.putS(ob.id, ob)
      } else {
         return await super.postSave(ob)
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

   abstract newEntity(): Entity;
}

export default ApiEntity;