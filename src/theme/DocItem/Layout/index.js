import React from "react";
import Layout from "@theme-original/DocItem/Layout";
import { useDoc } from "@docusaurus/theme-common/internal";
import ApiPlayground from "@site/src/components/ApiPlayground";
import ApiExamples from "@site/src/components/ApiExamples";
import styles from "./styles.module.css";

export default function LayoutWrapper(props) {
  const { frontMatter } = useDoc();

  const api = frontMatter?.api;
  const examples = frontMatter?.examples;

  if (!api) {
    return <Layout {...props} />;
  }

  return (
    <div className={`${styles.apiLayout} ${styles.apiPage}`}>
      <Layout {...props} />

      <aside className={styles.playground}>
        <ApiPlayground {...api} />

        <ApiExamples
          exampleRequest={examples?.request}
          exampleResponse={examples?.response}
        />
      </aside>
    </div>
  );
}

