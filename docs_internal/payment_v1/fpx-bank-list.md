---
id: get-fpx-bank-list
title: Get Fpx Bank List
sidebar_label: Get Fpx Banks
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/fpx-bank`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/fpx-bank`

:::note
To get fpx bank lists
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

```json
{
  "item": {
    "ABB0233:B2C": {
      "code": "ABB0233:B2C",
      "isOnline": true,
      "name": "Affin Bank"
    },
    "ABMB0212:B2C": {
      "code": "ABMB0212:B2C",
      "isOnline": true,
      "name": "Alliance Bank (Personal)"
    },
    "AGRO01:B2C": {
      "code": "AGRO01:B2C",
      "isOnline": true,
      "name": "AGRONet"
    },
    "AMBB0209:B2C": {
      "code": "AMBB0209:B2C",
      "isOnline": true,
      "name": "AmBank"
    },
    "BCBB0235:B2C": {
      "code": "BCBB0235:B2C",
      "isOnline": true,
      "name": "CIMB Bank"
    },
    "BIMB0340:B2C": {
      "code": "BIMB0340:B2C",
      "isOnline": true,
      "name": "Bank Islam"
    },
    "BKRM0602:B2C": {
      "code": "BKRM0602:B2C",
      "isOnline": true,
      "name": "Bank Rakyat"
    },
    "BMMB0341:B2C": {
      "code": "BMMB0341:B2C",
      "isOnline": true,
      "name": "Bank Muamalat"
    },
    "BSN0601:B2C": {
      "code": "BSN0601:B2C",
      "isOnline": true,
      "name": "Bank Simpanan Nasional"
    },
    "HLB0224:B2C": {
      "code": "HLB0224:B2C",
      "isOnline": true,
      "name": "Hong Leong Bank"
    },
    "HSBC0223:B2C": {
      "code": "HSBC0223:B2C",
      "isOnline": true,
      "name": "HSBC"
    },
    "KFH0346:B2C": {
      "code": "KFH0346:B2C",
      "isOnline": true,
      "name": "Kuwait Finance House"
    },
    "MB2U0227:B2C": {
      "code": "MB2U0227:B2C",
      "isOnline": true,
      "name": "Maybank2U"
    },
    "MBB0228:B2C": {
      "code": "MBB0228:B2C",
      "isOnline": true,
      "name": "Maybank2E"
    },
    "OCBC0229:B2C": {
      "code": "OCBC0229:B2C",
      "isOnline": true,
      "name": "OCBC"
    },
    "PBB0233:B2C": {
      "code": "PBB0233:B2C",
      "isOnline": true,
      "name": "Public Bank"
    },
    "RHB0218:B2C": {
      "code": "RHB0218:B2C",
      "isOnline": true,
      "name": "RHB Bank"
    },
    "SCB0216:B2C": {
      "code": "SCB0216:B2C",
      "isOnline": true,
      "name": "Standard Chartered Bank"
    },
    "UOB0226:B2C": {
      "code": "UOB0226:B2C",
      "isOnline": true,
      "name": "United Oversea Bank"
    }
  },
  "code": "SUCCESS"
}
```
