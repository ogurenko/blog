import { NextSeo } from "next-seo";

const Seo = ({ article }) => {
  return (
    <NextSeo
      title={article.title}
      description={article.summary}
      canonical={`https://blog-theta-wine.vercel.app/article/${article.slug}`}
      openGraph={{
        title: article.title,
        site_name: "Dragan Vucinic",
        description: article.summary,
        url: `https://blog-theta-wine.vercel.app`,
        type: "article",
      }}
    />
  );
};

export default Seo;
