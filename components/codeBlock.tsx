import Highlight, { defaultProps } from "prism-react-renderer";
import type { Language, PrismTheme } from "prism-react-renderer";
import { useColorMode } from "@chakra-ui/react";
import lightTheme from "prism-react-renderer/themes/github";
import nightOwl from "prism-react-renderer/themes/nightOwl";

interface CodeBlockProps {
  className: Language;
  children: string;
  theme: string;
}

const CodeBlock = ({ children, className }: CodeBlockProps): JSX.Element => {
  const { colorMode } = useColorMode();

  const themes: { [key: string]: PrismTheme } = {
    light: lightTheme,
    dark: nightOwl,
  };
  const language: Language = className?.replace(/language-/, "") as Language;

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={themes[colorMode]}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "20px", overflow: "auto" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

CodeBlock.defaultProps = {
  className: "javascript",
};

export default CodeBlock;
