import { isLog } from "@/services/services/login/service";
import { toPage } from "@/services/tools/JsService";
import React from "react";

class PageNoLogin extends React.Component {
   async componentDidMount() {
      if (isLog()) {
         toPage('home')
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

export default PageNoLogin