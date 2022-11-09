import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Card from "../UI/Card";

const IdleBreakdown = () => {
  return (
    <Card
      title={"Idle Time Breakdown"}
      w="100%"
      height="210px"
      option={
        <Flex>
          <Flex alignItems={"center"} mr="25px">
            <Box h="16px" w="16px" bg="brand.160" rounded={"50%"}></Box>
            <Text ml="12px" fontWeight={600} fontSize="md">
              Idle
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Box h="16px" w="16px" bg="brand.green.100" rounded={"50%"}></Box>
            <Text ml="12px" fontWeight={600} fontSize="md">
              Productive
            </Text>
          </Flex>
        </Flex>
      }
    >
      <SimpleGrid
        columns={3}
        borderBottomWidth={"1px"}
        borderBottomColor="brand.170"
      >
        <Flex alignItems={"flex-end"} justifyContent="center">
          <Box w="24px" h="76px" bg="brand.170"></Box>
          <Box w="24px" h="28px" bg="brand.green.100" ml="8px"></Box>
        </Flex>
        <Flex alignItems={"flex-end"} justifyContent="center">
          <Box w="24px" h="36px" bg="brand.170"></Box>
          <Box w="24px" h="63px" bg="brand.green.100" ml="8px"></Box>
        </Flex>
        <Flex alignItems={"flex-end"} justifyContent="center">
          <Box w="24px" h="36px" bg="brand.170"></Box>
          <Box w="24px" h="70px" bg="brand.green.100" ml="8px"></Box>
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={3}>
        <Text fontSize="sm" color="brand.150" textAlign={'center'}>
          Coding
        </Text>
        <Text fontSize="sm" color="brand.150" textAlign={'center'}>
          Code review
        </Text>
        <Text fontSize="sm" color="brand.150" textAlign={'center'}>
          QA review
        </Text>
      </SimpleGrid>
    </Card>
  );
};

export default IdleBreakdown;
