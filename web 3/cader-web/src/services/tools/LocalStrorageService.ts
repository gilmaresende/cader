
export function saveStorage(key: string, ob: any) {
   localStorage.setItem(`@${key}`, JSON.stringify(ob))
}