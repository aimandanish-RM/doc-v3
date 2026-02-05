import React from "react";
import Layout from "@theme-original/DocItem/Layout";
import { useDoc } from "@docusaurus/theme-common/internal";
import ApiPlayground from "@site/src/components/ApiPlayground";
import styles from "./styles.module.css";

export default function LayoutWrapper(props) {
  const { frontMatter } = useDoc();
  const api = frontMatter?.api;

  // ✅ No API → use default layout (full width)
  if (!api) {
    return <Layout {...props} />;
  }

  // ✅ API page → split layout
  return (
    <div className={styles.layout}>
      <main className={styles.content}>
        <Layout {...props} />
      </main>

      <aside className={styles.api}>
        <ApiPlayground {...api} />
      </aside>
    </div>
  );
}
