import { Flex, SimpleGrid } from "@chakra-ui/react";
import PieChart from "../charts/PieChart";
import Badge from "../UI/Badge";
import Card from "../UI/Card";

const CycleTime = () => {
  return (
    <Card title={"Cycle time"} w="100%" height={{ base: "auto", md: "274px" }}>
      <SimpleGrid columns={1}>
        <Flex alignItems={"flex-end"}>
          <Badge type={true} text="24%" />
          <PieChart />
        </Flex>
      </SimpleGrid>
    </Card>
  );
};

export default CycleTime;
