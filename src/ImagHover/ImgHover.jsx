import React from "react";
import pic from "../assets/image/pic.jpg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "20%",
    height: "200px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    boxShadow: "0 10px 20px rgb(40, 40, 40)",
    "&:hover": {
      opacity: "0.8",
    },
  },
  overly: {
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    opacity: "0",
    transition: "opacity 0.4s ease-in-out",
    background: "black",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
    fontFamily: "verdana",
    textAlign: "center",
  },
}));

const ImgHover = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <img src={pic} alt="pic" style={{ width: "100%", height: "100%" }} />
        <div className={classes.overly}>
          <div className={classes.content}>
            <h3>Hello World</h3>
            <p>This is React js</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgHover;
