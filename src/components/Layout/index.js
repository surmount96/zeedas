import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Home from "../../pages/home";
import Sidebar from "../UI/Navigation/Sidebar";
import TopNav from "../UI/Navigation/TopNav";

function Layout() {
  const [show, setShow] = useState(false);

  return (
    <Flex bg="brand.gray.100">
      <Box
        w={show ? { base: "", md: "320px" } : { base: "130px", md: "80px" }}
        transition={"all .4s"}
      >
        <Sidebar setShow={setShow} show={show} />
      </Box>

      <Box px={{ base: 5, md: "45px" }} flexGrow="1">
        <TopNav />
        <Home />
      </Box>
    </Flex>
  );
}

export default Layout;
