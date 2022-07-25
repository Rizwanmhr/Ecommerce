import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Slide } from "@mui/material";

const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Please like and subscribe :)",
];

const Slider = () => {
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length);

      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <Box
        mt={2}
        sx={{
          background: "#C2C5CC",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slide
          direction={show ? "left" : "right"}
          in={show}
          timeout={{ enter: 500, exit: 100 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              fontSize: "20px",
            }}
          >
            {messages[messageIndex]}
          </div>
        </Slide>
      </Box>
    </>
  );
};

export default Slider;
