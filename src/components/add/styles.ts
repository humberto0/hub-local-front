import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50rem;
  gap: ${({ theme }) => theme.space.S16};
`;

export const ButtonAdd = styled(Button)`
  height: 3.75rem;
  padding: ${({ theme }) => theme.space.S6} ${({ theme }) => theme.space.S30};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.hex.white};
  font-size: ${({ theme }) => theme.typography.fontSizes.A1125};
  font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};

  :hover {
    background-color: ${({ theme }) => theme.palette.hex.blue600};
  }
`;
