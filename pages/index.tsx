import { GetStaticProps } from "next";
import Container from "../components/container";
import { Stack, Flex } from "@chakra-ui/react";
import { getArticles, getCategories } from "../lib/api";
import Card from "../components/card";

const HomePage = ({ articles }) => {
  return (
    <>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            {!articles
              ? null
              : articles.map((article, i) => {
                  return <Card key={i} article={article} />;
                })}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { articles } = await getArticles();

  const categories = (await getCategories()) || [];

  return {
    props: { articles },
  };
};

export default HomePage;
