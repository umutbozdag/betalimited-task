import React from "react";
import {
  InputBase,
  Paper,
  useTheme,
  darken,
  SxProps,
  Theme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "components/shared/Button";

interface ISearchBarProps {
  placeholder: string;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  onInputChange?: (value: string) => void;
  children?: JSX.Element | string;
  sxProps?: SxProps<Theme>;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  placeholder,
  onInputChange,
  width,
  children,
  sxProps,
}) => {
  const theme = useTheme();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onInputChange && onInputChange(event.target.value);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: theme.spacing(6),
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
          width: width || 700,
        },
        [theme.breakpoints.down("md")]: {
          width: 450,
        },
        [theme.breakpoints.down("sm")]: {
          width: 300,
        },
        ...sxProps,
      }}
    >
      <InputBase
        placeholder={placeholder}
        onChange={handleChange}
        sx={{
          pl: theme.spacing(1),
          flex: 1,
          border: `1px solid ${theme.palette.layout.common.secondary}`,
          borderRadius: 20,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          height: '100%',
          borderRight: 'none',
          '&.Mui-focused': {
            borderColor: theme.palette.layout.common.danger,
          }
        }}
        inputProps={{ "aria-label": "search" }}
        startAdornment={
          <SearchIcon
            sx={{
              ml: 1,
              mr: 0.5,
              color: theme.palette.layout.common.secondary,
            }}
          />
        }
      />
      <Button
        aria-label="search"
        sxProps={{
          width: theme.spacing(18),
          borderRadius: theme.spacing(20),
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          height: "100%",
          "&:hover": {
            backgroundColor: darken(theme.palette.layout.common.danger, 0.1),
          },
          fontWeight: 600,
          [theme.breakpoints.down("md")]: {
            width: theme.spacing(15),
          },
          [theme.breakpoints.down("sm")]: {
            width: theme.spacing(8),
            fontSize: 12,
          },
        }}
      >
        {children}
      </Button>
    </Paper>
  );
};

export default SearchBar;
