import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";

type Props = {
  exampleRequest?: string;
  exampleResponse?: string;
};

export default function ApiExamples({
  exampleRequest,
  exampleResponse,
}: Props) {
  const [openReq, setOpenReq] = useState(true);
  const [openRes, setOpenRes] = useState(true);

  if (!exampleRequest && !exampleResponse) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      {exampleRequest && (
        <div className={styles.card}>
          <div
            className={styles.header}
            onClick={() => setOpenReq(!openReq)}
          >
            Example Request
          </div>

          {openReq && (
            <CodeBlock language="bash">
              {exampleRequest}
            </CodeBlock>
          )}
        </div>
      )}

      {exampleResponse && (
        <div className={styles.card}>
          <div
            className={styles.header}
            onClick={() => setOpenRes(!openRes)}
          >
            Example Response
          </div>

          {openRes && (
            <CodeBlock language="json">
              {exampleResponse}
            </CodeBlock>
          )}
        </div>
      )}
    </div>
  );
}

