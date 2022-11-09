import { Flex, Box, Text } from "@chakra-ui/react";

const StatusCard = ({ color, percent, text }) => {
  return (
    <Flex alignItems={"center"}>
      <Box h="16px" w="16px" bg={color} rounded={"50%"}></Box>
      <Text ml="2" fontWeight={600} fontSize="md">
        {percent} {" "}
        <Text as="span" color={"brand.150"}>
          {text}
        </Text>
      </Text>
    </Flex>
  );
};

export default StatusCard;
