import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FC } from "react";

const DarkModeSwitch: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("black", "white");
  return (
    <header>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        color={iconColor}
      />
    </header>
  );
};

export default DarkModeSwitch;
