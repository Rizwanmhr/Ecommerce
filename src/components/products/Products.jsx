import React, { useContext } from "react";
import {
  Card,
  Grid,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { ProductContext } from "../../context/ContextProvider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: "10px",
    width: "100%",
    background: "#C2C5CC !important",
    color: "red !important",
    "&:hover": {
      background: "#fff !important",
      border: "1px solid red !important",
      color: "black !important",
    },
  },
}));

const Products = () => {
  const classes = useStyles();
  const { products, handleAddToCart } = useContext(ProductContext);

  const UsDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <Grid container spacing={2} mt={2}>
        {products.map((prod) => {
          return (
            <Grid item lg={3} xs={12}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <img
                    src={prod.image}
                    alt="name"
                    style={{ width: "100%", height: "70vh" }}
                  />
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{UsDollar.format(prod.price)}</Typography>
                  </Stack>
                  <Button
                    className={classes.btn}
                    onClick={() => handleAddToCart(prod)}
                  >
                    Add To Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
