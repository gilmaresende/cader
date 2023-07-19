import { ApiUser } from "@/services/api/user/apiservice"
import { toPage } from "@/services/tools/JsService"
import { getValue, removeStorage, saveStorage } from "@/services/tools/LocalStrorageService"

const service = new ApiUser()

export async function logar(ob: Login) {
   const token = await service.logar(ob)
   if (token !== '0') {
      ob.password = token
      saveStorage('cader-login', ob)
      toPage('home')
   }
}

export function isLog() {
   const tarefasStorage = getValue('cader-login')
   if (tarefasStorage) {
      return true
   }
   return false
}

export function logOut() {
   removeStorage('cader-login')
   toPage('')
}

export function getUser() {
   return getValue('cader-login')
}

export function getToken() {
   const user = getUser()
   if (user) {
      return user.password
   }
   return ''
}

