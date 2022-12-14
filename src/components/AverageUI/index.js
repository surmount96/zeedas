import { SimpleGrid, Flex, Text, Box, Spacer } from "@chakra-ui/react";
import Card from "../UI/Card";
import Badge from "../UI/Badge";

const AverageUI = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacingX="5" mb="16px">
      <Card title={"Average PR size"} w="100%">
        <Flex alignItems="center">
          <Box ml="">
            <Text fontSize={"lg"} fontWeight="700" fontFamily={'Futura'}>
              968{" "}
              <Text
                as="span"
                fontWeight="400"
                fontSize={"sm"}
                color="brand.150"
                fontFamily={'Nunito sans'}
              >
                lines
              </Text>
            </Text>
            <Text w="115px" color="brand.150" fontSize={"md"}>
              Line change{" "}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight="700" fontFamily={'Futura'}>
              240{" "}
              <Text
                as="span"
                fontWeight="400"
                fontSize={"sm"}
                color="brand.150"
                fontFamily={'Nunito sans'}
              >
                kb
              </Text>
            </Text>
            <Text color="brand.150" fontSize={"md"}>
              Size{" "}
            </Text>
          </Box>
        </Flex>
        <Spacer height={"26px"} />
        <Badge type={true} text="24%" />
      </Card>
      <Card title={"Average ticket duration"} w="100%" height="200px">
        <Flex justifyContent={"space-between"} alignItems="center">
          <Box>
            <Text fontSize={"lg"} fontWeight="700" fontFamily={'Futura'}>
              36{" "}
              <Text
                as="span"
                fontWeight="400"
                fontSize={"sm"}
                color="brand.150"
                fontFamily={'Nunito sans'}
              >
                hours
              </Text>
            </Text>
            <Text color="brand.150" fontSize={"md"}>
              Hours worked{" "}
            </Text>
          </Box>
        </Flex>
        <Spacer height={"26px"} />
        <Badge text="79%" />
      </Card>
    </SimpleGrid>
  );
};

export default AverageUI;
