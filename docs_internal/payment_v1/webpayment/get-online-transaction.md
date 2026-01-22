---
id: get-online-transaction
title: Get Online Transaction By Checkout ID
sidebar_label: Get Online Transaction By Checkout ID
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/online?checkoutId=1564042398456416062`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/online?checkoutId=1564042398456416062`

:::note

- To get transaction report, by inputting **checkoutId** in your query.
- The URL is consists of `[base_URL]`/v3/payment/online?checkoutId=`[checkoutId]`

:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

```json
{
  "item": {
    "id": "1564042398456416062",
    "order": {
      "id": "8831341134233334438",
      "title": "Lorem Ipsum",
      "detail": "hello",
      "additionalData": "world",
      "currencyType": "MYR",
      "amount": 10
    },
    "type": "WEB_PAYMENT",
    "transactionId": "190725081318300433898289",
    "platform": "OPEN_API",
    "method": [
      "WECHATPAY_MY",
      "WECHATPAY_CN",
      "PRESTO_MY",
      "BOOST_MY",
      "GRABPAY_MY",
      "ALIPAY_CN",
      "TNG_MY",
      "MAYBANK_MY"
    ],
    "redirectUrl": "https://revenuemonster.my",
    "notifyUrl": "https://dev-rm-api.ap.ngrok.io",
    "startAt": "2019-07-25T08:13:18Z",
    "endAt": "2019-07-25T08:23:18Z",
    "status": "EXPIRED",
    "createdAt": "2019-07-25T08:13:18Z",
    "updatedAt": "2019-07-25T08:13:18Z"
  },
  "code": "SUCCESS"
}
```
