import React from "react";
import {
  IconButton,
  ButtonBase,
  SxProps,
  ButtonBaseProps,
  useTheme,
  Theme,
} from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";

type ButtonType = "primary" | "secondary";

type ButtonSize = "small" | "medium" | "large";

interface IButtonProps extends ButtonBaseProps {
  icon?: React.ReactElement<SvgIconProps>;
  isBlock?: boolean;
  variant?: ButtonType;
  size?: ButtonSize;
  sxProps?: SxProps<Theme>;
}

const Button: React.FC<IButtonProps> = ({
  icon,
  isBlock = false,
  variant = "primary",
  size = "medium",
  sxProps,
  children,
  ...props
}) => {
  const theme = useTheme();

  const variantColors = {
    primary: {
      color: theme.palette.layout.common.white,
      backgroundColor: theme.palette.layout.common.danger,
    },
    secondary: {
      color: theme.palette.layout.common.primary,
      backgroundColor: theme.palette.layout.common.white,
    },
  };

  const sizes = {
    small: {
      width: theme.spacing(13),
      height: theme.spacing(4),
    },
    medium: {
      width: theme.spacing(15),
      height: theme.spacing(5),
    },
    large: {
      width: theme.spacing(16),
      height: theme.spacing(6),
    },
  };

  return icon ? (
    <IconButton
      sx={{
        ...sxProps,
      }}
    >
      {icon}
    </IconButton>
  ) : (
    <ButtonBase
      type="button"
      sx={{
        display: isBlock ? "block" : "inline",
        textAlign: "center",
        fontSize: 14,
        ...variantColors[variant],
        ...sizes[size],
        ...sxProps,
      }}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
