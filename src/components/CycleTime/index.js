import { Flex, Box, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import Badge from "../UI/Badge";
import Card from "../UI/Card";
import StatusCard from "../UI/StatusCard";

const CycleTime = () => {
  return (
    <Card title={"Cycle time"} w="100%" height="274px">
      <SimpleGrid columns={2}>
        <Flex alignItems={"flex-end"}>
          <Badge type={true} text="24%" />
          <Flex
            h="135px"
            w="135px"
            borderWidth={"20px"}
            borderColor="brand.200"
            borderTopColor="brand.green.100"
            borderBottomColor="brand.orange.100"
            borderLeftColor="brand.100"
            rounded={"50%"}
            my="24px"
            alignItems={"center"}
            justifyContent="center"
            textAlign={'center'}
          >
            <Box>
              <Text fontWeight="700">17 hrs</Text>
              <Text fontWeight="600" fontSize="xs" color="brand.150">
                Average across 50 tickets in 4 weeks
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box>
          <StatusCard text="Coding" color="brand.green.100" percent="4hrs" />
          <Spacer height={"17px"} />
          <StatusCard text="Code Review" color="brand.200" percent="8hrs" />
          <Spacer height={"17px"} />
          <StatusCard text="QA Review " color="brand.black.100" percent="1hr" />
          <Spacer height={"17px"} />
          <StatusCard
            text="Idle Time "
            color="brand.orange.100"
            percent="3hrs"
          />
          <Spacer height={"17px"} />
          <StatusCard
            text="Deployment"
            color="brand.purple.100"
            percent="1hr"
          />
        </Box>
      </SimpleGrid>
    </Card>
  );
};

export default CycleTime;
