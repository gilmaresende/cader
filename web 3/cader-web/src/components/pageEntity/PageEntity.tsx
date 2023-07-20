import { BaseEntity } from "@/modal/BaseEntity";
import ApiEntity from "@/services/api/entityapi";
import PageLogin from "../pagelogin/PageLog";

abstract class PageEntity<Entidade extends BaseEntity, Service extends ApiEntity<Entidade>> extends PageLogin {

   private service: Service
   public ob: Entidade

   getService() {
      return this.service
   }

   build() {

   }

   constructor(service: Service) {
      super({});
      this.service = service
      this.ob = this.getService().newEntity()
   }

   async save() {
      this.showLoadind()
      const response = await this.service.save(this.ob)
      this.disabledLoadind()
   }
}

export default PageEntity