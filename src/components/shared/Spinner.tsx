import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

interface ICustomSpinnerProps extends CircularProgressProps {
  isCentered?: boolean;
}

const Spinner: React.FC<ICustomSpinnerProps> = ({
  isCentered = true,
  ...props
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isCentered ? "center" : "inherit",
      }}
    >
      <CircularProgress
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: props.color,
        }}
        {...props}
      />
    </Box>
  );
};

export default Spinner;
