import {
  useColorModeValue,
  Text,
  Flex,
  Box,
  chakra,
  Spacer,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import Seo from "./seo";
import DarkModeSwitch from "./darkModeSwitch";

const BlogArticleLayout = ({ children, article }): JSX.Element => {
  // console.log("Article:", article);

  return (
    <>
      {/*Allows anchor link to not get stuck under nav bar */}
      <Global
        styles={css`
          * {
            scroll-padding-top: 80px;
          }
        `}
      />
      <Seo article={article} />
      <chakra.article
        id={"blogArticle"}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        width="full"
        minH="100vh"
        mx="auto"
        maxWidth="2xl"
      >
        <Flex
          direction="row"
          alignItems="center"
          maxW="2xl"
          mx={"auto"}
          mb={12}
          mt={5}
          w="full"
        >
          <Spacer />

          <DarkModeSwitch />

          <Text
            color={useColorModeValue("gray.700", "gray.300")}
            ml={1}
            pt={2}
          ></Text>
          <Flex alignItems="center" my={{ base: 2, md: 0 }}>
            {article[0].name}
          </Flex>

          <Text color={useColorModeValue("gray.700", "gray.300")}></Text>
        </Flex>
        <Box
          mb={16}
          px={2}
          maxWidth="4xl"
          width="full"
          className={"blog-content"}
        >
          {children}
        </Box>
      </chakra.article>
    </>
  );
};

export default BlogArticleLayout;
