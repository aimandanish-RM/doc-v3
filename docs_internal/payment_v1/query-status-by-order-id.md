---
id: query-status-by-order-id
title: Query Status By Order ID
sidebar_label: Query Status By Order ID
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL :`https://open.revenuemonster.my/v3/payment/transaction/order/5fdb13b7e5f337f0332bdd59`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/payment/transaction/order/5fdb13b7e5f337f0332bdd59`

:::note
Get Payment Transaction By Order ID
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>
<strong>Transaction object (item):</strong>

| Parameter       | Type     | Description                                                                                                             | Example                               |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `store`         | Object   | Store object                                                                                                            | (Refer to explanation below)          |
| `referenceId`   | String   | Transaction ID (from Payment server)                                                                                    | "20201217211212800110171725600805232" |
| `transactionId` | String   | Transaction ID (from RM server)                                                                                         | "152161448229438994"                  |
| `order`         | Object   | Order object                                                                                                            | (Refer to explanation below)          |
| `terminalId`    | String   | Terminal ID                                                                                                             | ""                                    |
| `payee`         | Object   | Object of userID made payment (payment sender)                                                                          | {"userId": "1000000806040489"}        |
| `currencyType`  | String   | Currency Type                                                                                                           | "MYR"                                 |
| `balanceAmount` | Uint     | Is Sales Amount - Refunded Amount                                                                                       | 1865                                  |
| `voucher`       | Object   | Voucher                                                                                                                 | null                                  |
| `transactionAt` | DateTime | Date time of transaction                                                                                                | "2018-03-21T06:41:22Z"                |
| `platform`      | String   | Currently only support "OPEN_API"                                                                                       | "OPEN_API"                            |
| `method`        | String   | [RM currently supported method](../payment-method.mdx)                                                                  | "TNG"                                 |
| `type`          | String   | Currently only support "QUICKPAY" , "WEB_PAYMENT"                                                                       | "WEB_PAYMENT"                         |
| `status`        | String   | Status returned from server, "SUCCESS" or "IN_PROCESS" or "FAILED". "IN_PROCESS" means user scanned and making payment. | "SUCCESS"                             |
| `region`        | String   | Region of wallet, "MALAYSIA" or "CHINA"                                                                                 | "MALAYSIA"                            |
| `extraInfo`     | Object   |                                                                                                                         | (Refer to explanation below)          |
| `createdAt`     | DateTime | Creation date time of transaction                                                                                       | "2018-03-21T06:41:22Z"                |
| `updatedAt`     | DateTime | Last update date time of transaction                                                                                    | "2018-03-21T06:41:22Z"                |

<br/>
<strong>Store object (store):</strong>

| Parameter      | Type     | Description                                    | Example                                                      |
| -------------- | -------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `id`           | String   | Store ID                                       | "2808912573238362402"                                        |
| `name`         | String   | Store Name                                     | "REVENUE MONSTER"                                            |
| `imageUrl`     | String   | Yes                                            | "https://storage.googleapis.com/rm-prod-asset/img/store.png" |
| `addressLine1` | String   | Store Address 1                                | "B-5-30, 5th Floor, Block Bougainvillea,"                    |
| `addressLine2` | String   | Store Address 2                                | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"                    |
| `postCode`     | String   | Postcode of store                              | "47400"                                                      |
| `city`         | String   | City of store                                  | "Petaling Jaya"                                              |
| `state`        | String   | State of store                                 | "Selangor"                                                   |
| `country`      | String   | Country of store                               | "Malaysia"                                                   |
| `countryCode`  | String   | Country code of store contact number           | "60"                                                         |
| `phoneNumber`  | String   | Phone number of store                          | "377334080"                                                  |
| `geoLocation`  | Object   | Geo Location (latitude and longitude) of store | {"latitude": 3.1349857, "longitude": 101.6136659 }           |
| `status`       | String   | Current status of store                        | "ACTIVE"                                                     |
| `createdAt`    | DateTime | Creation date time of store                    | "2020-09-14T03:01:20Z"                                       |
| `updatedAt`    | DateTime | Last update date time of store                 | "2020-09-14T03:01:20Z"                                       |

<br/>
<strong>Order object (order):</strong>

| Parameter | Type   | Description              | Example                        |
| --------- | ------ | ------------------------ | ------------------------------ |
| `id`      | String | Order ID (from Merchant) | "134850717797247290"           |
| `title`   | String | Order title              | "Sales"                        |
| `detail`  | String | Order details            | "1 x iPhone X; 2 x SAMSUNG S8" |
| `amount`  | Uint   | Amount of order          | 1865                           |

<br/>
<strong>ExtraInfo object (extraInfo):</strong>

| Parameter | Type   | Description | Example |
| --------- | ------ | ----------- | ------- |
| `card`    | Object |             | {}      |

> Example Response

```json
{
  "item": {
    "store": {
      "id": "2808912573238362402",
      "name": "One Utama",
      "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
      "addressLine1": "1 UTAMA SHOPPING CENTRE,  LEBUH BANDAR UTAMA,  BANDAR UTAMA",
      "addressLine2": "",
      "postCode": "47800",
      "city": "Petaling Jaya",
      "state": "Selangor",
      "country": "Malaysia",
      "countryCode": "60",
      "phoneNumber": "1123621544",
      "geoLocation": {
        "latitude": 3.1507599,
        "longitude": 101.6154222
      },
      "status": "ACTIVE",
      "createdAt": "2020-09-14T03:01:20Z",
      "updatedAt": "2020-09-14T03:01:20Z"
    },
    "referenceId": "20201217211212800110171725600805232",
    "transactionId": "201217081554300427519553",
    "order": {
      "id": "5fdb13b7e5f337f0332bdd59",
      "title": "Pay to One Utama",
      "detail": "",
      "amount": 1865
    },
    "terminalId": "",
    "payee": {
      "userId": "1000000806083034"
    },
    "currencyType": "MYR",
    "balanceAmount": 1865,
    "voucher": null,
    "platform": "OPEN_API",
    "method": "TNG",
    "transactionAt": "2020-12-17T08:16:05Z",
    "type": "WEB_PAYMENT",
    "status": "SUCCESS",
    "region": "MALAYSIA",
    "extraInfo": {
      "card": {}
    },
    "createdAt": "2020-12-17T08:15:54Z",
    "updatedAt": "2020-12-17T08:16:05Z"
  },
  "code": "SUCCESS"
}
```
