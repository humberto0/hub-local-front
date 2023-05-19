import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  max-width: 75.9rem;
  gap: ${({ theme }) => theme.space.S16};
  padding: ${({ theme }) => theme.space.S32};
`;
