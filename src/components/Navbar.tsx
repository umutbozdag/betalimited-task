import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, useTheme } from "@mui/material";
import SearchBar from "components/SearchBar";
import { useDispatch } from "app/hooks";
import { searchProductStart, setSearchValue } from "app/features/product/slice";
import useDebounce from "hooks/useDebounce";

const DEFAULT_DEBOUNCE = 500;

const NavbarLogo = () => {
  const theme = useTheme();
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        fontSize: "1.5em",
        color: theme.palette.layout.common.primary,
        [theme.breakpoints.down("md")]: {
          fontSize: "1.2em",
        },
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      }}
    >
      betalimited
    </Typography>
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
      <Toolbar sx={{ height: theme.spacing(11) }}>
        <NavbarLogo />

        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <SearchBar
            placeholder="Searching for..."
            width={600}
            onInputChange={(searchValue) => handleInputChange(searchValue)}
          >
            Search
          </SearchBar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
