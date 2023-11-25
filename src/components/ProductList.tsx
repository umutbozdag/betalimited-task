import { ProductItemWithQuantity } from "types/Product";
import ProductCard from "components/ProductCard";
import { Grid } from "@mui/material";
import useIsMobile from "hooks/useIsMobile";

interface IProductItemListProps {
  products: ProductItemWithQuantity[];
}

const ProductList: React.FC<IProductItemListProps> = ({ products }) => {
  const isMobile = useIsMobile();
  return (
    <Grid
      container
      sx={{
        gap: 4,
        alignItems: "center",
        justifyContent: "center",
        pb: isMobile ? 4 : 8,
      }}
    >
      {products.map((product) => (
        <Grid item key={product.id}>
          <ProductCard key={product.id} {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
