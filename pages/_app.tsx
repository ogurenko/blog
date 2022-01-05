import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { AppProps } from "next/dist/shared/lib/router/router";
// Make a default seo for all app
import { DefaultSeo } from "next-seo";
import theme from "../components/theme";
import SEO from "../next-seo.config";
import Head from "next/head";
import { usePageViews } from "../hooks/usePageViews";
import { Analytics } from "../lib/analytics";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
            padding: 0;
          }
          * {
            box-sizing: border-box;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#1A202C"};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews();
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <GlobalStyle>
        <Analytics />
        <DefaultSeo {...SEO} />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          />
        </Head>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
