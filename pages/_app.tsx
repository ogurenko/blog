import {
  ChakraProvider,
  useColorMode
} from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { AppProps } from "next/dist/shared/lib/router/router";
// Make a default seo for all app
import { DefaultSeo } from "next-seo";
import theme from "../components/theme";
import SEO from '../next-seo.config'


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
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <GlobalStyle>
        <DefaultSeo {...SEO}/>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
