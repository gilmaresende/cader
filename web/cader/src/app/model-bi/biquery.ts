export interface BIQuery {
  key: string;
  label: string;
  data: string;
  children: Array<BIQuery>;
  main: boolean;
  pathJasper?: string;
}
