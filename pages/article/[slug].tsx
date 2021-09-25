import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles, getArticle, getCategories } from "../../lib/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import BlogArticleLayout from "../../layout/blogArticleLayout"
import MDXComponents from "../../components/MDXComponents";




const Article = ({ article, content }) => {

  return (
    <>
      <BlogArticleLayout article={article}>
        <main>
          <MDXRemote {...content} components={MDXComponents} />
        </main>
      </BlogArticleLayout>
    </>
  );
};

// tell next.js how many pages there are
export const getStaticPaths: GetStaticPaths = async () => {
  const { articles } = await getArticles();

  // Get the paths we want to pre-render based on articles
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// for each individual page: get the data for that page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;

    const article = (await getArticle({ slug })) || [];
    // const categories = (await getCategories()) || [];

    const content = await serialize(article[0].content);

    
    return {
      props: {
        article,
        content,
      },
    };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default Article;
