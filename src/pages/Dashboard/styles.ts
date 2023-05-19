import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  overflow-x: hidden;
  padding: ${({ theme }) => theme.space.S10};
`;
