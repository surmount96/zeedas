import { Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Card from "../UI/Card";
import StatusCard from "../UI/StatusCard";

const WorkBreakdown = () => {
  return (
    <Card
      title={"Work breakdown"}
      w="100%"
      height={{ base: "auto", md: "auto", lg: "264px" }}
    >
      <Flex alignItems="center">
        <Box ml="">
          <Text fontSize={"lg"} fontWeight="700" fontFamily="Futura">
            968{" "}
            <Text
              as="span"
              fontWeight="400"
              fontSize={"sm"}
              color="brand.150"
              fontFamily="Nunito sans"
            >
              lines
            </Text>
          </Text>
        </Box>
        <Box mx="24px">
          <Text fontSize={"lg"} fontWeight="700" fontFamily="Futura">
            54{" "}
            <Text
              as="span"
              fontWeight="400"
              fontSize={"sm"}
              color="brand.150"
              fontFamily="Nunito sans"
            >
              tickets
            </Text>
          </Text>
        </Box>
        <Box>
          <Text fontSize={"lg"} fontWeight="700" fontFamily="Futura">
            4{" "}
            <Text as="span" fontWeight="400" fontSize={"sm"} color="brand.150" fontFamily="Nunito sans">
              total weeks worked
            </Text>
          </Text>
        </Box>
      </Flex>
      <Flex h="37px" my="24px">
        <Box
          bg="brand.green.100"
          h="inherit"
          w="114px"
          borderTopLeftRadius={"100px"}
          borderBottomLeftRadius={"100px"}
        ></Box>
        <Box bg="brand.200" h="inherit" w="82px"></Box>
        <Box bg="brand.100" h="inherit" w="176px"></Box>
        <Box
          bg="brand.orange.100"
          h="inherit"
          w="88px"
          borderTopRightRadius={"100px"}
          borderBottomRightRadius={"100px"}
        ></Box>
      </Flex>
      <SimpleGrid columns={2} spacingY="3">
        <StatusCard text="New work" color="brand.green.100" percent="25%" />
        <StatusCard text="Rework" color="brand.200" percent="15%" />
        <StatusCard text="Refactor" color="brand.100" percent="40%" />
        <StatusCard text="Bugs" color="brand.orange.100" percent="20%" />
      </SimpleGrid>
    </Card>
  );
};

export default WorkBreakdown;
