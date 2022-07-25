import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  MenuItem,
  Typography,
  Menu,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(ProductContext);
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "/products" },
    { Name: "Portfolio", Link: "/portfolio" },
    { Name: "Blog", Link: "/blog" },
    { Name: "Contact Us", Link: "/contact" },
  ];
  return (
    <AppBar position="static" style={{ background: "#C2C5CC", color: "red" }}>
      <StyledToolbar>
        <SearchBox>
          <Link to="/">
            <Typography style={{ textDecoration: "none", color: "red" }}>
              E-commerce
            </Typography>
          </Link>
        </SearchBox>

        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => {
            return (
              <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
                <Link
                  to={`${item.Link}`}
                  style={{ textDecoration: "none", color: "red" }}
                >
                  {item.Name}
                </Link>
              </Typography>
            );
          })}
        </MenuBox>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Link to="/cart" style={{ color: "red" }}>
            <ShoppingCartIcon />
          </Link>
          {cart.length > 0 && <Box>{cart.length}</Box>}
          <MenuIcon
            sx={{ color: "white", display: { sm: "flex", md: "none" } }}
            onClick={() => setOpen(!open)}
          />
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => {
            return (
              <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
                <Link
                  to={`${item.Link}`}
                  style={{ textDecoration: "none", color: "red" }}
                >
                  {item.Name}
                </Link>
              </MenuItem>
            );
          })}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
