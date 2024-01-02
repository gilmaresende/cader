export function hasContent(str: string | null | undefined): boolean {
  if (str === null || str === undefined || str === '') {
    return false;
  }
  return true;
}
