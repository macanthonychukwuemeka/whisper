import { Box, Center, Button, Image, Text } from "@chakra-ui/react";
import GossipImg from "../src/assets/GossipImg.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
// the generated Api key
// const apiKey = "76b95ac7-39e2-41dd-94b1-fd6e1d8881b7";

const url =
  "https://cors-anywhere.herokuapp.com/https://secrets-api.appbrewery.com/random";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [newsecret, setNewSecret] = useState([]);
  const fetchSecret = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setNewSecret(data);
      console.log(data.secret);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSecret();
  }, []);
  return (
    <Box
      boxSize="100%"
      bg="rgb(5, 8, 27)"
      w="100%"
      h="100vh"
      display="grid"
      alignItems="center"
      placeItems="center"
    >
      <Text
        fontFamily={"monospace"}
        fontWeight=""
        fontSize={"1.6rem"}
        color="white"
        pt="25px"
      >
        Tell me a secret!
      </Text>

      <Box position="relative" background="rgba(255, 255, 255, 5.0)">
        <Image
          src={GossipImg}
          alt="shawn Gossip Image"
          width="20rem"
          h="28rem"
          objectFit="cover"
          background="rgba(7, 1, 22, 1.5)" /* Adjust the opacity to control brightness reduction */
        />
        <Text
          position="absolute"
          top="50"
          left="5"
          fontFamily={"cursive"}
          fontSize={"1.9rem"}
          // color="rgba(80, 255, 64  )"
          color="black"
          pt="25px"
          textAlign="center"
        >
          {newsecret.secret}
        </Text>
      </Box>

      <Text
        fontFamily={"monospace"}
        fontWeight=""
        fontSize={"1.6rem"}
        color="white"
        pb="25px"
      >
        {" "}
        I promise not to Whisper
      </Text>
      {/* https://secrets-api.appbrewery.com/random */}
      <Button
        px={8}
        bg="#151f21"
        color={"white"}
        rounded={"md"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        onClick={fetchSecret}
      >
        Click For more Secret
      </Button>
    </Box>
  );
};

export default App;

// import React, { useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const url =
//     "https://cors-anywhere.herokuapp.com/https://secrets-api.appbrewery.com/random";

//   const fetchSecret = async () => {
//     try {
//       const response = await axios.get(url);
//       console.log("Response:", response.data);
//     } catch (error) {
//       if (error.response) {
//         console.error(
//           "Response Error:",
//           error.response.status,
//           error.response.data
//         );
//       } else if (error.request) {
//         console.error("Request Error:", error.request);
//       } else {
//         console.error("Error", error.message);
//       }
//       console.error("Error Config:", error.config);
//     }
//   };

//   useEffect(() => {
//     fetchSecret();
//   }, []);

//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// };

// export default App;
