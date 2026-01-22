---
id: merchant-subscriptions
title: Get Merchant Subscriptions
sidebar_label: Get Merchant Subscriptions
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL :`https://open.revenuemonster.my/v3/merchant/subscriptions`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/merchant/subscriptions`

:::note
To query for merchant product subscription details.
:::

### Request Parameters:

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

| Parameter     | Type   | Description                                                                                                                                                        | Example                |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `id`          | Uint   | ID is to differentiate which subscription: <br/> **1000** : Loyalty & Voucher <br/> **1001** : Payment <br/> **1002** : Market Place <br/> **1003** : Social Media | 1001                   |
| `gracePeriod` | Uint   | merchant will terminate after **3 months**                                                                                                                         | 90                     |
| `expiryAt`    | DateTime | Expiry date time of merchant                                                                                                                                       | "2018-04-28T06:36:08Z" |
| `terminateAt` | DateTime | Terminate date time of merchant                                                                                                                                    | "2018-07-27T23:59:59Z" |
| `status`      | String | "ACTIVE" , "REVIEWING" , "SUSPEND" , "PENDING" , "SUSPEND"                                                                                                         | "ACTIVE"               |

> Example Response

```json
{
  "item": [
    {
      "id": 1001,
      "gracePeriod": 90,
      "expiryAt": "2018-04-28T06:36:08Z",
      "terminateAt": "2018-07-27T23:59:59Z",
      "status": "ACTIVE"
    },
    {
      "id": 1000,
      "gracePeriod": 90,
      "expiryAt": "2018-04-25T02:51:10Z",
      "terminateAt": "2018-07-24T23:59:59Z",
      "status": "ACTIVE"
    },
    {
      "id": 1003,
      "gracePeriod": 90,
      "expiryAt": "2018-04-29T05:04:30Z",
      "terminateAt": "2018-07-28T23:59:59Z",
      "status": "ACTIVE"
    }
  ],
  "code": "SUCCESS"
}
```
