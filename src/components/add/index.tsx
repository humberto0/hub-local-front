import { FC } from "react";
import * as S from "./styles";
import Typography from "@mui/material/Typography";
import { AddProps } from "./type";

export const Add: FC<AddProps> = ({ title, textButton, onClick }) => {
  return (
    <S.Container>
      <Typography variant="h1" textAlign={"center"}>
        {title}
      </Typography>
      <S.ButtonAdd onClick={onClick}>{textButton}</S.ButtonAdd>
    </S.Container>
  );
};
