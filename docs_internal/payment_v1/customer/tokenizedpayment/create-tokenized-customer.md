---
id: create-tokenized-customer
title: Create Tokenized Customer
sidebar_label: Create Tokenized Customer
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/tokenized-payment`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/tokenized-payment`

:::note
Create Tokenized Customer
:::

### Request Parameters

| Parameter            | Type   | Required | Description                           | Example                            |
| -------------------- | ------ | -------- | ------------------------------------- | ---------------------------------- |
| `storeId`            | String | Yes      | Store Identifier                      | "134850717797247290"               |
| `email`              | String | Yes      | Customer email                        | dev@revenuemonster.my              |
| `name`               | String | No       | Customer name                         | RM Developer                       |
| `countryCode`        | String | No       | Customer country code                 | 60                                 |
| `phoneNumber`        | String | No       | Customer phone number                 | 103603440                          |
| `productName`        | String | No       | Card bind title                       | Bind customer card for Product     |
| `productDescription` | String | No       | Card bind description                 | Bind customer card for description |
| `currency`           | String | Yes      | Recurring payment currency            | MYR                                |
| `amount`             | String | Yes      | Recurring payment amount              | 100                                |
| `redirectUrl`        | String | Yes      | Redirect URL after customer bind card | https://google.com                 |
| `notifyUrl`          | String | Yes      | Notify URL when payment has made      | https://google.com                 |


### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Customer object                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Customer object (item):</strong>

| Parameter            | Type   | Description                                                  | Example                                                                     |
| -------------------- | ------ | ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `id`                 | String | Customer ID                                                  | 1668148680519476516                                                         |
| `merchantId`         | String | Merchant ID                                                  | 4118165203679668885                                                         |
| `storeId`            | String | Store ID                                                     | 1602660043994159611                                                         |
| `email`              | String | Customer email                                               | dev@revenuemonster.my                                                       |
| `name`               | String | Customer name                                                | RM Developer                                                                |
| `label`              | String | Customer PAN Label                                           |                                                                             |
| `countryCode`        | String | Customer country code                                        | 60                                                                          |
| `phoneNumber`        | String | Customer phone number                                        | 103603440                                                                   |
| `isActive`           | bool   | Customer active status ( no card bind will always be false ) | true                                                                        |
| `createdAt`          | String | Created DateTime timstamp in RFC3339 formatted               | 2022-11-11T06:38:00Z                                                        |
| `updatedAt`          | String | Updated DateTime timstamp in RFC3339 formatted               | 2022-11-11T06:38:00Z                                                        |
| `clientKey`          | String | Customer client key ( internal usage only )                  | EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg                                          |
| `amount`             | Int64  | Recurring payment amount                                     | 1000                                                                        |
| `redirectUrl`        | String | Redirect URL after customer bind card                        | https://google.com                                                          |
| `notifyUrl`          | String | Notify URL when payment has made                             | https://google.com                                                          |
| `productName`        | String | Recurring product title                                      | Recurring Product                                                           |
| `productDescription` | String | Recurring product description                                | Recurring description                                                       |
| `paymentUrl`         | String | Payment URL for Customer bind their Card Information         | https://sb-pg.revenuemonster.my/v1/recurring?customerId=1668148680519476516 |

> Example Response

```json
{
    "item": {
        "id": "1671769885610598325",
        "merchantId": "4118165203679668885",
        "storeId": "1602660043994159611",
        "label": "",
        "email": "oska.ng@revenuemonster.my",
        "name": " Oska Ng OpenAPI",
        "countryCode": "60",
        "phoneNumber": "187824152",
        "productName": "card tokenized binding",
        "productDescription": "some description for card tokenized",
        "isActive": false,
        "createdAt": "2022-12-23T04:31:25Z",
        "updatedAt": "2022-12-23T04:31:25Z",
        "clientKey": "EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg",
        "redirectUrl": "https://google.com",
        "notifyUrl": "https://google.com",
        "paymentUrl": "https://sb-pg.revenuemonster.my/v1/recurring?customerId=1671769885610598325"
    },
    "code": "SUCCESS"
}
```
