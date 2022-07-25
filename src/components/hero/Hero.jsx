import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import shop from "../../assets/image/shop.jpg";

const Hero = () => {
  return (
    <>
      <Box>
        <Typography align="center" variant="h3" sx={{ fontWeight: 900 }} mt={2}>
          Shopping<b style={{ color: "red" }}>Blog</b>
        </Typography>
        <Typography
          align="center"
          variant="body2"
          sx={{ fontWeight: 100 }}
          pb={2}
          mt={2}
        >
          We Make you look the better of you!
        </Typography>
        <Box
          sx={{
            backgroundImage: `url(${shop})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 600,
            width: "100",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "40%" },
              padding: { xs: 3, sm: 2, md: 20 },
            }}
          >
            <Box sx={{ background: "white", opacity: "0.8" }}>
              <Typography align="center" variant="h6" color="tomato" pt={8}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography align="center" variant="h4">
                similique accusantium nemo autem
              </Typography>
              <Typography align="center" variant="body1" pb={8}>
                Quo neque error repudiandae fuga
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
