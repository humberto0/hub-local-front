import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import BusinessIcon from "@mui/icons-material/Business";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export const AppBarHeader = styled(AppBar)`
  box-shadow: none;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.hex.white};
  max-height: 5rem;
`;

export const Logo = styled(BusinessIcon)`
  font-size: 2rem;
  margin-right: ${({ theme }) => theme.space.S5};
`;

export const ToolbarHeader = styled(Toolbar)`
  height: 100%;
  padding-right: 0 !important;
`;

export const LogoText = styled(Typography)`
  flex-grow: 1;
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.fontSizes.A1000};
  }
`;

export const ButtonDrawer = styled(Button)`
  height: 5rem;
  background-color: ${({ theme }) => theme.palette.hex.gray300};
  color: ${({ theme }) => theme.palette.hex.black};
  border-radius: 0;
  padding: ${({ theme }) => theme.space.S2} ${({ theme }) => theme.space.S30};
  :hover {
    background-color: ${({ theme }) => theme.palette.hex.gray400};
  }
  gap: ${({ theme }) => theme.space.S16};
`;

export const AvatarHeader = styled(Avatar)`
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Name = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.fontSizes.A1125};
  font-weight: ${({ theme }) => theme.typography.fontWeightSemiBold};
  color: ${({ theme }) => theme.palette.hex.black};
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
