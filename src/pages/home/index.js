import React from "react";
import { SimpleGrid, Text, Box, Flex, Spacer } from "@chakra-ui/react";
import MenuDropdown from "../../components/UI/Menu";
import AverageUI from "../../components/AverageUI";
import CycleTime from "../../components/CycleTime";
import WorkBreakdown from "../../components/WorkBreakdown";
import IdleBreakdown from "../../components/IdleBreakdown";
import Planning from "../../components/Planning";

const Home = () => {
  return (
    <>
      <Text fontWeight={700} fontFamily="Futura">Project stats</Text>
      <Flex justifyContent={"flex-end"}>
        <MenuDropdown />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="5" mt="27px" w="100%">
        <Box>
          <AverageUI />
          <CycleTime />
        </Box>
        <Box>
          <WorkBreakdown />
          <Spacer height={"16px"} />
          <IdleBreakdown />
        </Box>
      </SimpleGrid>
      <Spacer height={"92px"} />

      <Planning />
    </>
  );
};

export default Home;
