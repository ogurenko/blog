import { Flex, useColorModeValue, Box, Button, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import { Footer } from "./footer";

import DarkModeSwitch from "./darkModeSwitch";

type Props = {
  children?: ReactNode;
};

const StickyNav = styled(Flex)`
  position: relative;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height 0.5s, line-height 0.5s;
`;

const Container: FC = ({ children }: Props) => {
  const bg = useColorModeValue("white", "gray.800");

  const color = useColorModeValue("black", "white");

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bg}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              textDecoration="none"
              _hover={{ backgroundColor: "none" }}
            >
              <Avatar
                size="md"
                name="chakra-ui"
                src="https://res.cloudinary.com/dragardelo/image/upload/v1640084867/blog/SlikaLinkedin_aonobz.jpg"
              />
            </Button>
          </Link>
        </Box>
        <DarkModeSwitch />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bg}
        color={color}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
}

export default Container;
