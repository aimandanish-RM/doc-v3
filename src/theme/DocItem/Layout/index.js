import React from "react";
import Layout from "@theme-original/DocItem/Layout";
import { useDoc } from "@docusaurus/theme-common/internal";
import ApiPlayground from "@site/src/components/ApiPlayground";
import styles from "./styles.module.css";

export default function LayoutWrapper(props) {
  const { frontMatter } = useDoc();
  const api = frontMatter?.api;

  // Normal docs → default layout (with TOC)
  if (!api) {
    return <Layout {...props} />;
  }

  // API docs → custom split layout
  return (
    <div className={styles.apiLayout}>
      <main className={styles.docContent}>
        <Layout
          {...props}
          hideTableOfContents={true}
        />
      </main>

      <aside className={styles.playground}>
        <ApiPlayground {...api} />
      </aside>
    </div>
  );
}
