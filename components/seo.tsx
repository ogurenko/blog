import { NextSeo } from "next-seo";

const Seo = ({ article }) => {
  return (
    <NextSeo
      title={article.title}
      description={article.summary}
      canonical={`${process.env.NEXT_PUBLIC_URL}/article/${article.slug}`}
      openGraph={{
        title: article.title,
        site_name: "Dragan Vucinic",
        description: article.summary,
        url: `https://www.draganvucinic.com`,
        type: "article",
      }}
    />
  );
};

export default Seo;
