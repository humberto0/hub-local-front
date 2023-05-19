import { memo, useState } from "react";
import * as S from "./styles";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledMenu } from "./menu";
import { store } from "../../redux/store";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const name = store.getState().authReducer.user?.name || "";
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <S.AppBarHeader position="static" color="default">
      <S.ToolbarHeader>
        <S.Logo />
        <S.LogoText variant="h2">Minhas Empresas</S.LogoText>
        <S.ButtonDrawer
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <S.AvatarHeader alt="Remy Sharp" src="/static/images/avatar/1.jpg">
            {name.substring(0, 2)}
          </S.AvatarHeader>
          <S.Name>{name}</S.Name>
        </S.ButtonDrawer>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <EditIcon />
            Edit
          </MenuItem>
        </StyledMenu>
      </S.ToolbarHeader>
    </S.AppBarHeader>
  );
};
