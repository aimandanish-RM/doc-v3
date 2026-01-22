---
id: create-customer-order
title: Create Customer Order
sidebar_label: Create Customer Order
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}/order`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}/order`

:::note
Create Customer Order
:::

### Request Parameters

| Parameter  | Type   | Required | Description                | Example |
| ---------- | ------ | -------- | -------------------------- | ------- |
| `currency` | String | Yes      | Recurring payment currency | MYR     |
| `amount`   | String | Yes      | Recurring payment amount   | 100     |


### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Transaction object (item):</strong>

| Parameter       | Type     | Description                                               | Example                                    |
| --------------- | -------- | --------------------------------------------------------- | ------------------------------------------ |
| `store`         | Object   | Store object                                              | (Refer to explanation below)               |
| `referenceId`   | String   | Reference ID (from WeChat server)                         | ""                                         |
| `transactionId` | String   | Transaction ID (from RM server)                           | "152161448229438994"                       |
| `order`         | Object   | Order object                                              | (Refer to explanation below)               |
| `payee`         | Object   | Object of userID made payment (payment sender)            | {"userId": "o74f0wjjzv9eKRu1fccrZswVFnOQ"} |
| `currencyType`  | String   | Currency notation (currently only support `MYR`)          | "MYR"                                      |
| `balanceAmount` | Uint     | Amount of order                                           | 100                                        |
| `platform`      | String   | Currently only support "OPEN_API"                         | "OPEN_API"                                 |
| `method`        | String   | [RM currently supported method](../../payment-method.mdx) | ALL                                        |
| `type`          | String   | Currently only support "QUICKPAY"                         | "QUICKPAY"                                 |
| `status`        | String   | Status returned from WeChat server                        | "SUCCESS"                                  |
| `region`        | String   | Region of wallet, "MALAYSIA" or "CHINA"                   | "MALAYSIA"                                 |
| `error`         | String   | (Refer `Appendix: Error Codes`)                           | {}                                         |
| `transactionAt` | DateTime | Payment date time                                         | "2018-03-21T06:41:22Z"                     |
| `createdAt`     | DateTime | Creation date time of transaction                         | "2018-03-21T06:41:22Z"                     |
| `updatedAt`     | DateTime | Last update date time of transaction                      | "2018-03-21T06:41:22Z"                     |

<br />
<strong>Store object (store):</strong>

| Parameter      | Type              | Description                                     | Example                                            |
| -------------- | ----------------- | ----------------------------------------------- | -------------------------------------------------- |
| `id`           | String            | Store ID                                        | "6170506694335521334"                              |
| `name`         | String            | Store Name                                      | "REVENUE MONSTER"                                  |
| `addressLine1` | String            | Store Address 1                                 | "B-5-30, 5th Floor, Block Bougainvillea,"          |
| `addressLine2` | String            | Store Address 2                                 | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"          |
| `postCode`     | String            | Postcode of store                               | "47400"                                            |
| `city`         | String            | City of store                                   | "Petaling Jaya"                                    |
| `state`        | String            | State of store                                  | "Selangor"                                         |
| `country`      | String            | Country of store                                | "Malaysia"                                         |
| `countryCode`  | String            | Country code of store contact number            | "60"                                               |
| `phoneNumber`  | String            | Phone number of store                           | "377334080"                                        |
| `geoLocation`  | Object of [Float] | Geo Location (latitude and longtitude) of store | {"latitude": 3.1349857, "longitude": 101.6136659 } |
| `status`       | String            | Current status of store                         | "ACTIVE"                                           |
| `createdAt`    | DateTime          | Creation date time of store                     | "2018-02-12T08:53:13Z"                             |
| `updatedAt`    | DateTime          | Last update date time of store                  | "2018-02-12T08:53:13Z"                             |

<br />
<strong>Order object (order):</strong>

| Parameter | Type   | Description                                         | Example                        |
| --------- | ------ | --------------------------------------------------- | ------------------------------ |
| `id`      | String | Order ID (from Merchant), max: 24                   | "134850717797247290"           |
| `title`   | String | Order title, max: 32                                | "Sales"                        |
| `detail`  | String | Order details, max: 600                             | "1 x iPhone X; 2 x SAMSUNG S8" |
| `amount`  | Uint   | Amount of order in cent (min RM 0.10 or amount: 10) | 100                            |

> Example Response

```json
{
    "item": {
        "referenceId": "",
        "transactionId": "221111072221600425841118",
        "order": {
            "id": "1668151341700658887R0",
            "title": "Some Product Name",
            "detail": "Some Product productDescription",
            "additionalData": "1668151341700658887",
            "amount": 300
        },
        "terminalId": "",
        "currencyType": "MYR",
        "balanceAmount": 0,
        "finalAmount": 300,
        "voucher": null,
        "platform": "OPEN_API",
        "method": "GOBIZ",
        "error": {
            "message": "9010"
        },
        "transactionAt": "0001-01-01T00:00:00Z",
        "type": "RECURRING_PAYMENT",
        "status": "FAILED",
        "region": "MALAYSIA",
        "extraInfo": {
            "card": {
                "cardType": null,
                "provider": "",
                "isTokenization": false,
                "token": "",
                "maskNo": "",
                "inputType": "",
                "referenceId": "",
                "domain": "https://sb-pg.revenuemonster.my",
                "secondaryReferenceId": ""
            },
            "onlineBanking": null,
            "manualRefund": null
        },
        "extendInfo": {
            "inHousePromo": {
                "amount": 0,
                "info": null
            },
            "buyNowPayLater": {
                "isBuyNowPayLater": false,
                "installmentMonth": 0
            }
        },
        "source": "RECURRING",
        "createdAt": "2022-11-11T07:22:21Z",
        "updatedAt": "2022-11-11T07:23:23Z"
    },
    "code": "SUCCESS"
}
```
