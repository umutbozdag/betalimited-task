import React, { useEffect } from "react";
import { Box, Container, useTheme } from "@mui/material";
import ProductList from "components/ProductList";
import { useDispatch, useSelector } from "app/hooks";
import Spinner from "components/shared/Spinner";
import { selectProductsAndQuantity } from "app/rootSelectors";
import { fetchCartStart } from "app/features/cart/slice";
import { fetchProductsStart } from "app/features/product/slice";
import Button from "components/shared/Button";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { isLoading } = useSelector((state) => state.product);
  const { sessionId } = useSelector((state) => state.session);
  const productList = useSelector(selectProductsAndQuantity);

  useEffect(() => {
    dispatch(fetchProductsStart());
    if (sessionId) {
      dispatch(fetchCartStart());
    }
  }, [dispatch, sessionId]);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.layout.home.bgColor,
        pt: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        sx={{
          flexGrow: 1,
        }}
      >
        {isLoading ? (
          <Spinner
            sx={{
              color: theme.palette.layout.common.danger,
            }}
          />
        ) : (
          productList && <ProductList products={productList} />
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sxProps={{
              mb: theme.spacing(4),
              borderRadius: theme.spacing(0.5),
            }}
          >
            Load more...
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
