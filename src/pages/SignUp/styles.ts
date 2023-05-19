import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Logo = styled("img")`
  width: auto;
`;

export const FormSection = styled("div")`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LabelForm = styled("label")`
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  margin: ${({ theme }) => theme.space.S7} 0;
`;

export const FormContainer = styled("form")`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.space.S30};
`;

export const ButtonSignIn = styled(Button)`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  margin-top: 1rem;
  height: 100%;
  max-height: 3.75rem;
`;
