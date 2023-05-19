import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const ImageSection = styled("div")`
  height: 100vh;
  background-color: #0485ff;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardImage = styled("div")`
  width: 100%;
  max-height: 13rem;
  height: 100%;
  background: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardTitle = styled("h2")`
  color: #ffff;
  font-size: ${({ theme }) => theme.typography.fontSizes.A2000};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  max-width: 26rem;
  line-height: ${({ theme }) => theme.space.S36};
`;

export const CardText = styled(Typography)`
  color: #ffff;
  text-align: center;
  max-width: 32.5rem;
  margin-top: ${({ theme }) => theme.space.S10};
`;

export const ImageContainer = styled(Grid)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
