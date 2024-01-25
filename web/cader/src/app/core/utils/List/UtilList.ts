export function removeOfList(item: any, list: Array<any>) {
  let indexToRemove = list.indexOf(item);
  list.splice(indexToRemove, 1);
}
