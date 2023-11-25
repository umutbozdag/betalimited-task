import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  useTheme,
  ButtonBase,
  styled,
} from "@mui/material";
import {
  AddOutlined as AddIcon,
  RemoveOutlined as RemoveIcon,
} from "@mui/icons-material";
import { ProductItemWithQuantity } from "types/Product";
import { ProductItem } from "@/__generated__/graphql";
import { useDispatch } from "app/hooks";
import { executeCartOperationPending } from "app/features/cart/slice";
import { CartOperationEnum } from "types/Cart";

interface IProductCardProps extends ProductItemWithQuantity {}

const StyledQuantityButton = styled(ButtonBase)(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.palette.layout.common.danger,
  borderStyle: "solid",
  borderRadius: "4px",
  width: 30,
  height: 30,
  ".MuiTouchRipple-child": {
    backgroundColor: `${theme.palette.layout.common.danger} !important`,
  },
}));

const ProductCardQuantityButtons: React.FC<IProductCardProps> = (product) => {
  const { primary, danger } = useTheme().palette.layout.common;
  const dispatch = useDispatch();
  const showSubtractOperation = product.quantity > 0;

  const handleOnSubtractFromCart = (product: ProductItem) => {
    dispatch(
      executeCartOperationPending({
        product,
        operation: CartOperationEnum.SUBTRACT,
      })
    );
  };

  const handleOnAddToCart = (product: ProductItem) => {
    dispatch(
      executeCartOperationPending({
        product,
        operation: CartOperationEnum.ADD,
      })
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {showSubtractOperation && (
        <Box>
          <StyledQuantityButton
            onClick={() => handleOnSubtractFromCart(product)}
          >
            <RemoveIcon sx={{ color: danger }} />
          </StyledQuantityButton>
          <Typography
            sx={{
              color: primary,
              my: 0.5,
              textAlign: "center",
            }}
          >
            {product.quantity}
          </Typography>
        </Box>
      )}

      <StyledQuantityButton
        onClick={() => handleOnAddToCart(product)}
        color={danger}
      >
        <AddIcon sx={{ color: danger }} />
      </StyledQuantityButton>
    </Box>
  );
};

const ProductCardContent: React.FC<IProductCardProps> = (props) => {
  const { danger, white, secondary } = useTheme().palette.layout.common;
  const { discount, name, rating, price, originalPrice } = props;
  return (
    <CardContent sx={{ mt: 1.5 }}>
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          bgcolor: danger,
          color: white,
          width: 60,
          py: 0.5,
          textAlign: "center",
          fontSize: 12,
          borderRadius: 50,
        }}
      >
        {discount}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography component="div">{name}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              mt: 1,
            }}
          >
            <Rating
              size="small"
              name="product-rating"
              value={rating}
              precision={1}
              readOnly
            />
            <Typography
              sx={{
                ml: 1,
              }}
              variant="body2"
              color={secondary}
            >
              ({rating})
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ mr: 1, color: danger }} variant="body1">
                ${price.toFixed(2)}
              </Typography>
              {discount && (
                <Typography
                  variant="body1"
                  color={secondary}
                  sx={{ textDecoration: "line-through" }}
                >
                  ${originalPrice.toFixed(2)}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>

        <ProductCardQuantityButtons {...props} />
      </Box>
    </CardContent>
  );
};

const ProductCardImage: React.FC<Pick<IProductCardProps, "name" | "image">> = ({
  name,
  image,
}) => {
  const { tertiary } = useTheme().palette.layout.common;
  return (
    <Box
      sx={{
        backgroundColor: tertiary,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        loading="lazy"
        image={image}
        sx={{ width: 200, height: 300, objectFit: "contain" }}
      />
    </Box>
  );
};

const ProductCard: React.FC<IProductCardProps> = (props) => {
  return (
    <Card
      sx={{
        width: 320,
        height: 450,
        position: "relative",
        boxShadow: 1,
      }}
      elevation={0}
    >
      <ProductCardImage {...props} />
      <ProductCardContent {...props} />
    </Card>
  );
};

export default ProductCard;
