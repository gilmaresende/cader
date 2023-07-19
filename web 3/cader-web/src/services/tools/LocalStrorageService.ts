
export function saveStorage(key: string, ob: any) {
   localStorage.setItem(`@${key}`, JSON.stringify(ob))
}

export function removeStorage(key: string) {
   localStorage.removeItem(`@${key}`)
}

export function getValue(key: string) {
   if (typeof window !== 'undefined') {
      const tarefasStorage = localStorage.getItem(`@${key}`)
      if (tarefasStorage != null) {
         const ob = JSON.parse(tarefasStorage)
         return ob
      }
      return null
   }
}



