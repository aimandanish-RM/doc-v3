---
id: application
title: Revenue Monster Application
sidebar_label: Application
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

:::note
Application Install
:::

<Flex justifyContent="center">
  <Button
    width="100%"
    sx={{
      ":hover": {
        backgroundColor: "blue",
      },
      backgroundColor: "#528ef7",
      borderRadius: 15,
      cursor:"pointer",
    }}
    onClick={() => {
      window.open( "https://install.appcenter.ms/orgs/revenue-monster/apps/revenue-monster-merchant-android/distribution_groups/public", "_blank");
       
    }}
  >
  <b>Production Application</b>
  </Button>
</Flex>
<br/>
<Flex justifyContent="center">
  <Button
    width="100%"
    sx={{
      ":hover": {
        backgroundColor: "blue",
      },
      backgroundColor: "#528ef7",
      borderRadius: 15,
      cursor:"pointer",
    }}
    onClick={() => {
       window.open(  "https://install.appcenter.ms/orgs/revenue-monster/apps/revenue-monster-merchant-android/distribution_groups/staging","_blank");
     
    }}
  >
    <b>Sandbox Application </b>
  </Button>
 
</Flex>
