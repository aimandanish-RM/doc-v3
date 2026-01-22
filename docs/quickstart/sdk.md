---
id: sdk
title: SDK
sidebar_label: SDK
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";
import styles from "../../src/pages/styles.module.css";

The following language SDK(s) and documentations are available.

:::note
Not all SDK(s) fully implemented all API functions. Pull requests are welcome.
:::

<Flex flexWrap="wrap" mx={-2}>
  <Box p={2} width={[1, 1 / 3]}>
    <Box
      className={styles.box}
      onClick={() => {
        window.open(
          "https://github.com/RevenueMonster/rm-sdk-go",
          "_blank"
        );
      }}
    >
      <Text className={styles.text}>Go</Text>
    </Box>
  </Box>
  <Box p={2} width={[1, 1 / 3]}>
    <Box
      className={styles.box}
      onClick={() => {
        window.open(
          "https://github.com/RevenueMonster/RM-API-SDK-PHP",
          "_blank"
        );
      }}
    >
      <Text className={styles.text}> Php</Text>
    </Box>
  </Box>
  <Box p={2} width={[1, 1 / 3]}>
    <Box
      className={styles.box}
      onClick={() => {
        window.open(
          "https://github.com/RevenueMonster/RM-API-SDK-Nodejs",
          "_blank"
        );
      }}
    >
      <Text className={styles.text}>NodeJS</Text>
    </Box>
  </Box>
</Flex>

<Flex flexWrap="wrap" mx={-2}>
  <Box p={2} width={[1, 1 / 3]}>
    <Box
      className={styles.box}
      onClick={() => {
        window.open(
          "https://github.com/RevenueMonster/RM-API-SDK-JAVA",
          "_blank"
        );
      }}
    >
      <Text className={styles.text}>Java</Text>
    </Box>
  </Box>
  <Box p={2} width={[1, 1 / 3]}>
    <Box
      className={styles.box}
      onClick={() => {
        window.open(
          "https://github.com/RevenueMonster/RM-API-SDK-Python",
          "_blank"
        );
      }}
    >
      <Text className={styles.text}> Python</Text>
    </Box>
  </Box>
  <Box p={2} width={[1, 1 / 3]}>
    <Box
      className={styles.box}
      onClick={() => {
        window.open(
          "https://github.com/RevenueMonster/RM-API-SDK-Csharp",
          "_blank"
        );
      }}
    >
      <Text className={styles.text}>C# (Deprecated)</Text>
    </Box>
  </Box>
</Flex>
