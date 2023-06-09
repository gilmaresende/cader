export function logar(ob: Login) {
   localStorage.setItem('@cader-login', JSON.stringify(ob))
}

export function isLog() {
   const tarefasStorage = localStorage.getItem('@cader-login')
   if (tarefasStorage) {
      console.log(JSON.parse(tarefasStorage))
   }
}




