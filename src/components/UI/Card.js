import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { InfoIcon } from "../../assets/svg";

const Card = ({ w, title, children, height = "auto", option, mb = "25px" }) => {
  return (
    <Box
      bg="white"
      p="16px"
      mb={{ base: 3, md: 3, lg: 0 }}
      borderRadius={"8px"}
      w={w}
      h={height}
    >
      <Flex
        mb={mb}
        pb="16px"
        borderBottomWidth={"1px"}
        borderBottomColor="brand.170"
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"}>
          <Text fontSize={"md"} color="brand.150" fontWeight={600} mr="9px">
            {title}
          </Text>
          <InfoIcon />
        </Flex>
        {option}
      </Flex>
      {children}
    </Box>
  );
};

export default Card;
