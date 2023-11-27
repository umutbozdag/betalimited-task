import React, { useEffect } from "react";
import { AppBar, Toolbar, Box, useTheme, Typography } from "@mui/material";
import SearchBar from "components/SearchBar";
import { useDispatch } from "app/hooks";
import { searchProductStart, setSearchValue } from "app/features/product/slice";
import useDebounce from "hooks/useDebounce";

const DEFAULT_DEBOUNCE = 500;

const NavbarLogo = () => {
  const theme = useTheme();
  return (
    <Box
      component="img"
      sx={{
        width: theme.spacing(22),
        [theme.breakpoints.down("lg")]: {
          mr: 1,
        },
        [theme.breakpoints.down("md")]: {
          width: theme.spacing(17),
          mb: 2,
        },
      }}
      src="/logo.png"
    />
  );
};

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");

  const debouncedValue = useDebounce(inputValue, DEFAULT_DEBOUNCE);
  const theme = useTheme();
  const handleInputChange = (searchValue: string) => {
    setInputValue(searchValue);
    dispatch(setSearchValue(searchValue));
  };

  useEffect(() => {
    if (debouncedValue) {
      dispatch(searchProductStart(debouncedValue));
    }
  }, [debouncedValue, dispatch]);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          height: theme.spacing(10),
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: theme.spacing(8),
          },
        }}
      >
        <NavbarLogo />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            [theme.breakpoints.down("md")]: {
              pb: theme.spacing(1),
            },
          }}
        >
          <SearchBar
            placeholder="Searching for..."
            onInputChange={(searchValue) => handleInputChange(searchValue)}
          >
            <Typography
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: 14,
                },
              }}
            >
              Search
            </Typography>
          </SearchBar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
