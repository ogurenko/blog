import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FC } from "react";
import { ArticleSnippetFragment } from "../lib/graphql/generated";
import { format } from "date-fns";



interface CardProps {
  article: ArticleSnippetFragment;
}

const Card: FC<CardProps> = ({ article }) => {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"outline"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {article.category.name}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            <ChakraLink href={`https://draganvucinic.com/article/${article.slug}`}>
              {article.title}
            </ChakraLink>
          </Heading>
          <Text>{article.description}</Text>
        </Stack>

        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text>
              {format(new Date(article.created_at), "d MMM yyyy")}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
