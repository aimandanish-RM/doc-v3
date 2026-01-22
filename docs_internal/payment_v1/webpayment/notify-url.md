---
id: notify-url
title: Notify URL
sidebar_label: Notify URL
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

:::note
Notify URL or callback URL to inform server on transaction status after payment made
:::

### Response Parameters

| Parameter   | Type   | Required | Example              |
| ----------- | ------ | -------- | -------------------- |
| `data`      | -      | Yes      | Refer to the below   |
| `eventType` | String | Yes      | "PAYMENT_WEB_ONLINE" |

<br/>
<strong>Data Object (data):</strong>

| Parameter       | Type   | Required | Example                              |
| --------------- | ------ | -------- | ------------------------------------ |
| `balanceAmount` | Uint   | Yes      | 100                                  |
| `createdAt`     | String | Yes      | "2019-03-01T05:51:20Z"               |
| `currencyType`  | String | Yes      | "MYR"                                |
| `method`        | String | Yes      | "WECHATPAY"                          |
| `order`         | -      | Yes      | Refer to the below                   |
| `payee`         | -      | Yes      | Refer to the below                   |
| `platform`      | String | Yes      | "OPEN_API"                           |
| `referenceId`   | String | Yes      | "1010014200000026201903016100904600" |
| `region`        | String | Yes      | "MALAYSIA"                           |
| `status`        | String | Yes      | "SUCCESS"                            |
| `store`         | String | Yes      | Refer to the below                   |
| `terminalId`    | String | Yes      | ""                                   |
| `transactionAt` | String | Yes      | "2019-03-01T05:51:59Z"               |
| `transactionId` | String | Yes      | "190301055133300427675601"           |
| `type`          | String | Yes      | "WEB_PAYMENT"                        |
| `updatedAt`     | String | Yes      | "2019-03-01T05:52:00.897920132Z"     |
| `voucher`       | String | Yes      | null                                 |

<br/>
<strong>Order Object (order):</strong>

| Parameter        | Type   | Required | Example               |
| ---------------- | ------ | -------- | --------------------- |
| `additionalData` | String | Yes      | "Payment to 11street" |
| `amount`         | Uint   | Yes      | 100                   |
| `detail`         | String | Yes      | "Payment to 11street" |
| `id`             | String | Yes      | "P000000660800"       |
| `title`          | String | Yes      | "Payment to 11street" |

<br/>
<strong>Payee Object (payee):</strong>

| Parameter | Type   | Required | Example                        |
| --------- | ------ | -------- | ------------------------------ |
| `userId`  | String | Yes      | "oKz050cwbEJwKAnKZgbD24UYibHQ" |

<br/>
<strong>Store Object (store):</strong>

| Parameter      | Type   | Required | Example                                                      |
| -------------- | ------ | -------- | ------------------------------------------------------------ |
| `addressLine1` | String | Yes      | ""                                                           |
| `addressLine2` | String | Yes      | ""                                                           |
| `city`         | String | Yes      | ""                                                           |
| `country`      | String | Yes      | ""                                                           |
| `countryCode`  | String | Yes      | ""                                                           |
| `createdAt`    | String | Yes      | "2018-10-02T10:52:03Z"                                       |
| `geoLocation`  | -      | Yes      | Refer to the below                                           |
| `id`           | String | Yes      | "2551293210619662240"                                        |
| `imageUrl`     | String | Yes      | "https://storage.googleapis.com/rm-prod-asset/img/store.png" |
| `name`         | String | Yes      | "11Street"                                                   |
| `phoneNumber`  | String | Yes      | ""                                                           |
| `postCode`     | String | Yes      | ""                                                           |
| `state`        | String | Yes      | ""                                                           |
| `status`       | String | Yes      | "ACTIVE"                                                     |
| `updatedAt`    | String | Yes      | "2018-10-02T10:52:03Z"                                       |

<br/>
<strong>Geolocation Object (geoLocation):</strong>

| Parameter   | Type  | Required | Example |
| ----------- | ----- | -------- | ------- |
| `latitude`  | Float | Yes      | 0       |
| `longitude` | Float | Yes      | 0       |

> Example Response

```json
{
  "data": {
    "balanceAmount": 100,
    "createdAt": "2019-03-01T05:51:20Z",
    "currencyType": "MYR",
    "method": "WECHATPAY",
    "order": {
      "additionalData": "Payment to 11street",
      "amount": 100,
      "detail": "Payment to 11street",
      "id": "P000000660800",
      "title": "Payment to 11street"
    },
    "payee": {
      "userId": "oKz050cwbEJwKAnKZgbD24UYibHQ"
    },
    "platform": "OPEN_API",
    "referenceId": "1010014200000026201903016100904600",
    "region": "MALAYSIA",
    "status": "SUCCESS",
    "store": {
      "addressLine1": "",
      "addressLine2": "",
      "city": "",
      "country": "",
      "countryCode": "",
      "createdAt": "2018-10-02T10:52:03Z",
      "geoLocation": {
        "latitude": 0,
        "longitude": 0
      },
      "id": "2551293210619662240",
      "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
      "name": "11Street",
      "phoneNumber": "",
      "postCode": "",
      "state": "",
      "status": "ACTIVE",
      "updatedAt": "2018-10-02T10:52:03Z"
    },
    "terminalId": "",
    "transactionAt": "2019-03-01T05:51:59Z",
    "transactionId": "190301055133300427675601",
    "type": "WEB_PAYMENT",
    "updatedAt": "2019-03-01T05:52:00.897920132Z",
    "voucher": null
  },
  "eventType": "PAYMENT_WEB_ONLINE"
}
```
