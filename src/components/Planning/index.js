import { Text, Flex, Box, SimpleGrid } from "@chakra-ui/react";
import Card from "../UI/Card";
import MenuDropdown from "../UI/Menu";

const Planning = () => {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent="space-between" mb="16px">
        <Text fontWeight={800}>Planning</Text>
        <MenuDropdown />
      </Flex>
      <SimpleGrid columns={4} spacingX="5">
        <Card title={"New Features added"}></Card>
        <Card title={"Complexity Accuracy"}></Card>
        <Card title={"Task Accuracy"}></Card>
        <Card title={"Refactor Rate"}></Card>
      </SimpleGrid>
    </Box>
  );
};

export default Planning;
