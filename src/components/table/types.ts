import { GridColDef } from "@mui/x-data-grid";

export interface TableProps {
  columns: GridColDef[];
  page: number;
  pageSize: number;
  rows: any[];
  loading: boolean;
}
