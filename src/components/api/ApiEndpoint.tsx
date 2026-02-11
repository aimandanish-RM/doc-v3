import React from "react";
import clsx from "clsx";
import styles from "./api.module.css";

type Props = {
  method: string;
  sandbox?: string;
  prod?: string;
};

export default function ApiEndpoint({ method, sandbox, prod }: Props) {
  return (
    <div className={styles.wrapper}>
      <span className={clsx(styles.badge, styles[method.toLowerCase()])}>
        {method}
      </span>

      <div className={styles.urls}>
        {sandbox && (
          <div>
            <span className={styles.label}>Sandbox</span>
            <code>{sandbox}</code>
          </div>
        )}
        {prod && (
          <div>
            <span className={styles.label}>Production</span>
            <code>{prod}</code>
          </div>
        )}
      </div>
    </div>
  );
}
