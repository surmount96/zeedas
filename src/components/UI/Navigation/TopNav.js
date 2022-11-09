import { MoreIcon } from "../../../assets/svg";
import { Flex } from "@chakra-ui/react";

const TopNav = () => {
  return (
    <Flex justifyContent={"flex-end"} alignItems="end" h="78px" mb="12px">
      <MoreIcon />
    </Flex>
  );
};

export default TopNav;
