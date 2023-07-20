import ApiBase from "@/services/api/baseapi";
import PageLogin from "../pagelogin/PageLog";

class PageEntity<Service extends ApiBase> extends PageLogin {

   private service: Service

   getService() {
      return this.service
   }

   constructor(service: Service) {
      super();
      this.service = service
   }
}

export default PageEntity