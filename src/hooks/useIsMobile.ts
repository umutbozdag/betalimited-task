import { Theme, useMediaQuery } from "@mui/material";
import { useLayoutEffect, useState } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  useLayoutEffect(() => {
    matches ? setIsMobile(true) : setIsMobile(false);
  }, [setIsMobile, matches]);

  return isMobile;
};

export default useIsMobile;
