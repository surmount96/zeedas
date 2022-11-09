import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { iconList, socialList } from "../../../constant/iconList";
import {
  ArrowButtonIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ClosedIcon,
  LogoIcon,
  SearchBoxIcon,
} from "../../../assets/svg";
import { sidebarList } from "../../../constant/sidebarList";

const Sidebar = ({ show, setShow }) => {
  return (
    <Flex pos={"fixed"}>
      <IconSidebar show={show} setShow={setShow} />
      {show && (
        <Box
          bg="#fff"
          borderRightWidth={"1px"}
          borderRightColor="brand.160"
          w="220px"
          h="100vh"
          px="24px"
          pt="34px"
        >
          <Flex alignItems={"center"} mb="12px">
            <ArrowLeftIcon />
            <Flex alignItems={"center"} ml="18px">
              <Image src="https://res.cloudinary.com/kingstech/image/upload/v1667938809/icon_ppykyo.png" />
              <Text fontWeight={700} fontSize="sm" ml="5px">
                FCMB: Mobile ...
              </Text>
            </Flex>
          </Flex>
          <Box>
            <Text fontWeight={600} fontSize="sm" color="brand.150" mb="8px">
              Workflows
            </Text>
            <Button
              fontWeight={600}
              fontSize="md"
              bg="brand.170"
              px="12px"
              py="7px"
              h="32px"
              rounded={"10px"}
              mb="24px"
              rightIcon={<ArrowDownIcon />}
            >
              Product dev
            </Button>
          </Box>

          {sidebarList?.map((list) => (
            <>
              <Flex
                key={list.title}
                alignItems="center"
                justifyContent={"space-between"}
                
                cursor={"pointer"}
              >
                <Box>
                  <Text
                    fontWeight={600}
                    fontSize="md"
                    color={
                      list.title === "Overview" ? "brand.200" : "brand.150"
                    }
                    mb="12px"
                  >
                    {list.title}
                  </Text>
                </Box>
                {list?.children?.length > 0 && <ClosedIcon />}
              </Flex>

              {list?.children?.length > 0 && (
                <Box
                  borderLeftWidth={"1px"}
                  borderLeftColor="brand.160"
                  px="16px"
                 
                >
                  {list.children?.map((sub) => (
                    <Text
                      key={sub.name}
                      fontWeight={600}
                      fontSize="md"
                      color={
                        sub.name === "Project stats" ? "brand.200" : "brand.150"
                      }
                      mb="12px"
                    >
                      {sub.name}
                    </Text>
                  ))}
                </Box>
              )}
            </>
          ))}
        </Box>
      )}
    </Flex>
  );
};

const IconSidebar = ({ setShow, show }) => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems="center"
      justifyContent={"space-between"}
      bg="brand.100"
      w="80px"
      h="100vh"
      py="24px"
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        w="100%"
      >
        <Box mb="31px">
          <LogoIcon />
          <Spacer height="16px" />
          <SearchBoxIcon />
        </Box>

        <Box>
          {iconList?.map((list) => {
            const Icon = list.Icon;
            return (
              <Flex flexDirection={"column"} alignItems="center" key={list.id}>
                <Box mb="16px">
                  <Icon />
                </Box>
              </Flex>
            );
          })}
        </Box>
        <Divider
          orientation="horizontal"
          borderColor="brand.gray.50"
          opacity={"0.1"}
          mt="31px"
          mb="28px"
        />
        <Box>
          {socialList?.map((list) => {
            const Icon = list.Icon;
            return (
              <Flex flexDirection={"column"} alignItems="center">
                <Box mb="16px">
                  <Icon />
                </Box>
              </Flex>
            );
          })}
        </Box>

        <Divider
          orientation="horizontal"
          color="brand.gray.50"
          mt="28px"
          opacity={"0.1"}
        />
      </Box>
      <Box
        onClick={() => {
          setShow(!show);
        }}
        cursor="pointer"
      >
        <ArrowButtonIcon />
      </Box>
    </Flex>
  );
};

export default Sidebar;
