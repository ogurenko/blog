import {
  Flex,
  Button,
  Spacer,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import Seo from "../components/seo";
import DarkModeSwitch from "../components/darkModeSwitch";
import Link from "next/link"


const BlogArticleLayout = ({ children, article }): JSX.Element => {

const bg = useColorModeValue("white","#1A202C")


  return (
    <>
      <Seo article={article} />
      <Container maxW="container.md">
       
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          mt={8}
          mb={8}
        >
          <Link href="/" passHref>
            <Button bg={bg} variant="ghost">
              Nazad
            </Button>
          </Link>
          <Spacer />
          <DarkModeSwitch />
        </Flex>
        {children}
      </Container>
    </>
  );
};

export default BlogArticleLayout;
