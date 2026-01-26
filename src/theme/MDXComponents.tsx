import React from "react";
import ApiPlayground from "../components/ApiPlayground";
import yaml from "js-yaml";
import type { ComponentProps } from "react";

type PreProps = ComponentProps<"pre">;

export default {
  ApiPlayground, 
  
  pre: (props: PreProps) => {
    const child = props.children as any;

    // Not a code block → render normally
    if (
      !child?.props?.className ||
      !child.props.className.includes("language-api-playground")
    ) {
      return <pre {...props} />;
    }

    // Extract raw YAML
    const raw = child.props.children;

    let parsed: any;
    try {
      parsed = yaml.load(raw as string);
    } catch (e) {
      return (
        <pre {...props}>
          YAML parse error in api-playground block
        </pre>
      );
    }

    return <ApiPlayground {...parsed} />;
  },
};
