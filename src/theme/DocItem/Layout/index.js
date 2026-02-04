//this one has the right side navigation
// import React from 'react';
// import Layout from '@theme-original/DocItem/Layout';

// export default function LayoutWrapper(props) {
//   return (
//     <>
//       <Layout {...props} />
//     </>
//   );
// }

import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/theme-common/internal';
import ApiPlayground from '@site/src/components/ApiPlayground';
import styles from './styles.module.css';

export default function LayoutWrapper(props) {
  const { children } = props;
  const { frontMatter } = useDoc();
  const api = frontMatter?.api;

  return (
    <div className={styles.layout}>
      <main>
        <Layout {...props} />
      </main>

      {api && (
        <aside className={styles.api}>
          <ApiPlayground {...api} />
        </aside>
      )}
    </div>
  );
}
