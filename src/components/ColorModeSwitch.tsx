import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./ui/switch";
import { useColorMode } from "./ui/color-mode";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorPalette={"green"}
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
