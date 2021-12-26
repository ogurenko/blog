import { Box, HStack, Container, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Text, TextProps } from "@chakra-ui/layout";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = (props: TextProps) => (
  <Container maxW="800px">
    <HStack justify="space-between">
      <Box as="footer" role="contentinfo" p="8">
        <Text {...props}>&copy; {new Date().getFullYear()} Dragan Vucinic</Text>
      </Box>
      <ButtonGroup variant="ghost" color="gray.600">
        <IconButton
          as="a"
          href="https://github.com/ogurenko"
          aria-label="Github"
          icon={<FaGithub />}
        />
        <IconButton
          as="a"
          href="https://twitter.com/CodesDragan"
          aria-label="Twitter"
          icon={<FaTwitter />}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/dragan-vu%C4%8Dini%C4%87-969946212/"
          aria-label="Linkedin"
          icon={<FaLinkedin />}
        />
      </ButtonGroup>
    </HStack>
  </Container>
);
