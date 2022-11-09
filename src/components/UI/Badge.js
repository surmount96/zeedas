import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { ArrowThinDownIcon, ArrowThinUpIcon } from "../../assets/svg";

const Badge = ({ type = false, text }) => {
  return (
    <Flex
      alignItems={"center"}
      bg={type ? "brand.green.150" : "brand.red.150"}
      color={type ? "brand.green.100" : "brand.red.100"}
      p="4px"
      w="63px"
      borderRadius={"6px"}
    >
      {type ? <ArrowThinUpIcon /> : <ArrowThinDownIcon />}
      <Text fontSize={"md"} fontWeight="700" ml="7px">
        {text}
      </Text>
    </Flex>
  );
};

export default Badge;
