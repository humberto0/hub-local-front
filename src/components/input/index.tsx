import React, {
  FC,
  ReactNode,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import { IMaskInput } from "react-imask";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import { TextFieldProps } from "@mui/material/TextField";

import { Mask } from "../../utils/mask";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as S from "./styles";
import { MaskProps, InputProps } from "./types";

export const InputText: FC<TextFieldProps & InputProps> = ({
  value,
  maskType,
  name,
  id,
  label,
  onChange,
  type,
  testId,
  error,
  helperText,
  select,
  onBlur,
  onFocus,
  list,
  size,
  disabled,
  buttonRight,
  placeholder,
  multiline,
  rows,
  maxRows,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const TextMaskCustom = useMemo(
    () =>
      forwardRef<HTMLElement, MaskProps>((props, ref) => {
        const { onChange, ...other } = props;

        const mask = maskType ? Mask[maskType](props.value) : "";

        return (
          <IMaskInput
            {...other}
            mask={mask as string}
            definitions={{
              "#": /[0-9]/,
            }}
            inputRef={() => ref}
            onAccept={(value: unknown) =>
              onChange({ target: { name: props.name, value } })
            }
            overwrite
          />
        );
      }),
    [maskType],
  );

  const TypesInput = useCallback(() => {
    if (type === "password") {
      if (showPassword) {
        return "text";
      }
      return "password";
    }
    return type;
  }, [showPassword, type]);

  const IconInputButton = useMemo(() => {
    if (type === "password") {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            data-testid="password-input-icon"
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      );
    }

    if (buttonRight) {
      return <InputAdornment position="end">{buttonRight}</InputAdornment>;
    }
    return null;
  }, [showPassword, type, buttonRight]);

  return (
    <S.InputText
      select={select}
      data-testid={testId}
      label={label}
      name={name}
      id={id}
      value={value}
      type={TypesInput()}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      InputProps={{
        inputComponent: maskType && (TextMaskCustom as never),
        endAdornment: IconInputButton as ReactNode,
      }}
      error={error}
      helperText={helperText}
      onChange={onChange}
      size={size}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
    >
      {list !== undefined &&
        list.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </S.InputText>
  );
};
