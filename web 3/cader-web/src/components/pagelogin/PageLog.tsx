import { isLog } from "@/services/services/login/service";
import { toPage } from "@/services/tools/JsService";
import React from "react";

abstract class PageLogin extends React.Component {

   state = {
      loading: false
   }

   async componentDidMount() {
      this.showLoadind()
      if (!isLog()) {
         toPage('')
      } else {
         console.log(this.props)
      }
      this.build()

      this.disabledLoadind()
   }

   render() {
      if (this.state.loading) {
         return <>carregando</>
      }
      return this.showView()
   }

   async showLoadind() {
      this.setState({ loading: true })
   }

   async disabledLoadind() {
      this.setState({ loading: false })
   }

   abstract showView(): any

   abstract build(): void
}

export default PageLogin