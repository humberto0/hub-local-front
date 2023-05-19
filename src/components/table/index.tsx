import { DataGrid } from "@mui/x-data-grid";
import * as S from "./styles";
import { FC } from "react";
import { TableProps } from "./types";

export const Table: FC<TableProps> = ({
  rows,
  columns,
  loading,
  page,
  pageSize,
}) => {
  return (
    <S.Container>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { page, pageSize },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </S.Container>
  );
};
