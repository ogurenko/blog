import CodeBlock from "./codeBlock";
import { Box } from "@chakra-ui/react";


const MDXComponents = {
  p: (props: any) => (
    <p style={{ marginTop: "1.7rem ", marginBottom: "2rem" }} {...props} />
  ),
  code: (props: any) => <CodeBlock {...props} />,
  img: (props: any) => (
    <img  {...props} alt="" />
  ),
  inlineCode: (props: any) => <code {...props} style={{ color: "lightcoral" }} />,
  pre: (props:any) => <pre style={{ width: "100%" }} {...props} />,
  table: (props:any) => (
  <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
),
};

export default MDXComponents;
