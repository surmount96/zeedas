import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { CaretDownIcon } from "../../../assets/svg";

const MenuDropdown = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="white"
        rightIcon={<CaretDownIcon />}
        w="125px"
        h="44px"
        fontWeight={400}
        fontSize="md"
      >
        All time
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuDropdown;
