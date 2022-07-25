import React, { useContext } from "react";
import { Button, Divider, Grid, Box } from "@mui/material";
import { ProductContext } from "../../context/ContextProvider";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: "10px",
    width: "10%",
    background: "#C2C5CC !important",
    color: "red !important",
    "&:hover": {
      background: "#fff !important",
      border: "1px solid red !important",
      color: "black !important",
    },
  },
}));

const Cart = () => {
  const classes = useStyles();
  const { cart, handleAddToCart, handleRemoveFromCart } =
    useContext(ProductContext);
  const total = (arr) => {
    return arr.reduce((cal, item) => {
      return cal + item.price * item.amount;
    }, 0);
  };

  const UsDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <Grid container>
        {cart.map((prod) => {
          return (
            <>
              <Grid item lg={6}>
                <img
                  src={prod.image}
                  alt="pic"
                  style={{ width: "50%", height: "40vh" }}
                />
                <br></br>
                <p>{prod.amount}</p>
                <br></br>
                <b
                  style={{
                    fontWeight: 900,
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {prod.price}
                </b>
                <Divider />
              </Grid>

              {/* <Divider /> */}
              <Grid item lg={6} mt={13}>
                <Button
                  className={classes.btn}
                  onClick={() => handleRemoveFromCart(prod.id)}
                >
                  <RemoveIcon />
                </Button>
                {UsDollar.format(prod.price)}
                <Button
                  className={classes.btn}
                  onClick={() => handleAddToCart(prod)}
                >
                  <AddIcon />
                </Button>
              </Grid>
            </>
          );
        })}
      </Grid>
      {cart.length > 0 ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              Maxwidth: "10%",
              height: "10vh",
              background: "#C2C5CC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Total: {UsDollar.format(total(cart))}
          </Box>
        </Box>
      ) : (
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          Your cart is empty
        </h2>
      )}
    </>
  );
};

export default Cart;
