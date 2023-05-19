import { useMemo } from "react";
import { Add } from "../../components/add";
import { Header } from "../../components/header";
import * as S from "./styles";
import { Table } from "../../components/table";
export const Dashboard = () => {
  const EmpresasFakes = [
    {
      id: 1,
      company: "Empresa 1",
      amount: 3,
    },
    {
      id: 2,
      company: "Empresa 2",
      amount: 3,
    },
    {
      id: 3,
      company: "Empresa 3",
      amount: 3,
    },
  ];

  const columns = [
    { field: "company", headerName: "Empresas" },
    { field: "amount", headerName: "Qt de Locais" },
    {
      field: "actions",
      headerName: "Ações",
      type: "number",
    },
  ];

  const showCompany = useMemo(() => {
    if (columns.length > 0) {
      return (
        <Table
          columns={columns}
          loading={false}
          page={1}
          pageSize={5}
          rows={EmpresasFakes}
        />
      );
    }
    return (
      <Add
        onClick={() => console.log}
        textButton="Adicionar Empresa"
        title="Nenhuma empresa cadastrada!"
      />
    );
  }, [EmpresasFakes, columns]);

  return (
    <S.Container>
      <Header />
    </S.Container>
  );
};
