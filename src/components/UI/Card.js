import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { InfoIcon } from "../../assets/svg";

const Card = ({ w, title, children, height = "auto", option }) => {
  return (
    <Box bg="white" p="16px" borderRadius={"8px"} w={w} h={height}>
      <Flex
        mb="25px"
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
