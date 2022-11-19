import { Text, Flex, Box, SimpleGrid } from "@chakra-ui/react";
import LineChart from "../charts/LineChart";
import Card from "../UI/Card";
import MenuDropdown from "../UI/Menu";

const Planning = () => {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent="space-between" mb="16px">
        <Text fontWeight={800}>Planning</Text>
        <MenuDropdown />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacingX="5">
        <Card title={"New Features added"} mb="5px">
          <Flex alignItems="center">
            <Text fontSize={"lg"} fontWeight="700" fontFamily="Futura">
              27{" "}
            </Text>
            <LineChart data={[70, 90, 343]} />
          </Flex>
        </Card>
        <Card title={"Complexity Accuracy"} mb="5px">
          <Flex alignItems="center">
            <Text fontSize={"lg"} fontWeight="700" fontFamily="Futura">
              96%{" "}
            </Text>
            <LineChart data={[70, 90, 343]} />
          </Flex>
        </Card>
        <Card title={"Task Accuracy"} mb="5px">
          <Flex alignItems="center">
            <Text fontSize={"lg"} fontWeight="700" fontFamily="Futura">
              56%{" "}
            </Text>
            <LineChart data={[70, 90, 343]} />
          </Flex>
        </Card>
        <Card title={"Refactor Rate"} mb="5px">
          <Flex alignItems="center">
            <Text fontSize={"lg"} fontWeight="700" fontFamily="Futura">
              87%{" "}
            </Text>
            <LineChart data={[70, 90, 343]} />
          </Flex>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Planning;
