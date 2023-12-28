export interface BIQuery {
  id: string;
  name: string;
  query: string;
  queriesChildren: Array<BIQuery>;
}
