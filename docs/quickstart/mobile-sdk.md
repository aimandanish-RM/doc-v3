---
id: mobile-sdk
title: Mobile SDK
sidebar_label: Mobile SDK
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";
import styles from "../../src/pages/styles.module.css";

The following language SDK(s) and documentations are available.

:::note
Not all SDK(s) fully implemented all API functions. Pull requests are welcome.
:::

<Flex marginTop="20px">
  <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
   className={styles.sdkBox}
      onClick={() => {
         window.open("https://github.com/RevenueMonster/RM-Android", "_blank");
    }}
    >
    <Text className={styles.text}>
     Android
    </Text>
  </Box>
    <Box
    width={1 / 3}
    marginRight="20px"
    px={3}
   className={styles.sdkBox}
    onClick={() => {
       window.open("https://github.com/RevenueMonster/RM-IOS", "_blank");
    }}
    >
    <Text className={styles.text} >
     IOS
    </Text>
  </Box>
</Flex>
