import { isLog } from "@/services/services/login/service";
import { toPage } from "@/services/tools/JsService";
import React from "react";

class PageLogin extends React.Component {
   async componentDidMount() {
      if (!isLog()) {
         console.log('to login')
         toPage('')
      } else {
         console.log("super no login")
      }
   }

   showView() {

   }

   render() {
      return (
         <>
            {this.showView()}
         </>
      );
   }
}

export default PageLogin