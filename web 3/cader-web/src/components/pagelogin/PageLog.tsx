import { isLog } from "@/services/services/login/service";
import { toPage } from "@/services/tools/JsService";
import React from "react";

abstract class PageLogin extends React.Component {

 
   private loading: boolean = false

   async componentDidMount() {
      this.loading = true
      if (!isLog()) {
         console.log('to login')
         toPage('')
      } else {
         console.log("super no login")
      }
      this.build()
      setTimeout(function () {
         console.log('dev')
      }, 3000);
      this.loading = false
   }

   render() {
      if (this.loading) {
         console.log('carregadndo')
         return <>carregando</>
      }

      return (
         <>
            {this.showView()}
         </>
      );
   }

   abstract showView(): any

   abstract build(): void
}

export default PageLogin