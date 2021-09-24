import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql/generated";


const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_ENDPOINT}/graphql`);
const sdk = getSdk(client);

export const getArticles = async () => {
  try {
    const { articles } = await sdk.Articles();
    // const { articlesConnection } = await sdk.ArticlesCount();

    return { articles };
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};

export const getArticle = async (props) => {
  try {
    const { slug } = props;
    const { articles } = await sdk.Article({ slug });

    return articles;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};

export const getCategories = async () => {
  try {
    const { categories } = await sdk.Categories();

    return categories;
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    process.exit(1);
  }
};
