---
id: create-recurring-customer
title: Create Recurring Customer
sidebar_label: Create Recurring Customer
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/recurring-payment`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/recurring-payment`

:::note
Create Recurring Customer
:::

### Request Parameters

| Parameter             | Type    | Required | Description                                                         | Example               |
| --------------------- | ------- | -------- | ------------------------------------------------------------------- | --------------------- |
| `storeId`             | String  | Yes      | Store Identifier                                                    | "134850717797247290"  |
| `email`               | String  | Yes      | Customer email                                                      | dev@revenuemonster.my |
| `name`                | String  | No       | Customer name                                                       | RM Developer          |
| `countryCode`         | String  | No       | Customer country code                                               | 60                    |
| `phoneNumber`         | String  | No       | Customer phone number                                               | 103603440             |
| `productName`         | String  | No       | Recurring product title                                             | Recurring Product     |
| `productDescription`  | String  | No       | Recurring product description                                       | Recurring description |
| `currency`            | String  | Yes      | Recurring payment currency                                          | MYR                   |
| `amount`              | String  | Yes      | Recurring payment amount                                            | 100                   |
| `redirectUrl`         | String  | Yes      | Redirect URL after customer bind card                               | https://google.com    |
| `notifyUrl`           | String  | Yes      | Notify URL when payment has made                                    | https://google.com    |
| `recurringInterval`   | String  | Yes      | Recurring payment interval could be `MONTHLY`, `WEEKLY`, `DAILY`    | WEEKLY                |
| `recurringTarget`     | String  | No       | Recurring target rules can be different values based on interval    | 1                     |
| `recurringRepetition` | Integer | No       | Recurring repetition rules, how many times charge the customer card | 1                     |

<strong>Recurring Target Rules:</strong>

| Interval | Target | Payment Behaviour                     |
| -------- | ------ | ------------------------------------- |
| WEEKLY   | 0      | Every week of Sunday                  |
| WEEKLY   | 1      | Every week of Monday                  |
| WEEKLY   | 2      | Every week of Tuesday                 |
| WEEKLY   | 3      | Every week of Wednesday               |
| WEEKLY   | 4      | Every week of Thursday                |
| WEEKLY   | 5      | Every week of Friday                  |
| WEEKLY   | 6      | Every week of Saturday                |
| MONTHLY  | -1     | End of every month e.g. 2022/10/31    |
| MONTHLY  | 0      | Start of every month, e.g. 2022/10/01 |
| MONTHLY  | 1 - 28 | Day of month                          |


### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Customer object                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Customer object (item):</strong>

| Parameter            | Type   | Description                                                      | Example                                                                     |
| -------------------- | ------ | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                 | String | Customer ID                                                      | 1668148680519476516                                                         |
| `merchantId`         | String | Merchant ID                                                      | 4118165203679668885                                                         |
| `storeId`            | String | Store ID                                                         | 1602660043994159611                                                         |
| `email`              | String | Customer email                                                   | dev@revenuemonster.my                                                       |
| `name`               | String | Customer name                                                    | RM Developer                                                                |
| `label`              | String | Customer PAN Label                                               |                                                                             |
| `countryCode`        | String | Customer country code                                            | 60                                                                          |
| `phoneNumber`        | String | Customer phone number                                            | 103603440                                                                   |
| `isActive`           | bool   | Customer active status ( no card bind will always be false )     | true                                                                        |
| `createdAt`          | String | Created DateTime timstamp in RFC3339 formatted                   | 2022-11-11T06:38:00Z                                                        |
| `updatedAt`          | String | Updated DateTime timstamp in RFC3339 formatted                   | 2022-11-11T06:38:00Z                                                        |
| `clientKey`          | String | Customer client key ( internal usage only )                      | EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg                                          |
| `amount`             | Int64  | Recurring payment amount                                         | 1000                                                                        |
| `redirectUrl`        | String | Redirect URL after customer bind card                            | https://google.com                                                          |
| `notifyUrl`          | String | Notify URL when payment has made                                 | https://google.com                                                          |
| `recurringInterval`  | String | Recurring payment interval could be `MONTHLY`, `WEEKLY`          | WEEKLY                                                                      |
| `recurringTarget`    | String | Recurring target rules can be different values based on interval | 1                                                                           |
| `productName`        | String | Recurring product title                                          | Recurring Product                                                           |
| `productDescription` | String | Recurring product description                                    | Recurring description                                                       |
| `paymentUrl`         | String | Payment URL for Customer bind their Card Information             | https://sb-pg.revenuemonster.my/v1/recurring?customerId=1668148680519476516 |

> Example Response

```json
{
    "item": {
        "id": "1671703158559365205",
        "merchantId": "4118165203679668885",
        "storeId": "1602660043994159611",
        "label": "",
        "email": "oska.ng@revenuemonster.my",
        "name": " Oska Ng OpenAPI",
        "countryCode": "60",
        "phoneNumber": "187824152",
        "isActive": false,
        "createdAt": "2022-12-22T09:59:18Z",
        "updatedAt": "2022-12-22T09:59:18Z",
        "clientKey": "EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg",
        "redirectUrl": "https://google.com",
        "notifyUrl": "https://google.com",
        "paymentUrl": "https://sb-pg.revenuemonster.my/v1/recurring?customerId=1671703158559365205",
        "recurringPayment": {
            "amount": 120,
            "currency": "MYR",
            "recurringInterval": "WEEKLY",
            "recurringTarget": "1",
            "productName": "Some Product Name",
            "productDescription": "Some Product productDescription",
            "recurringRepetition": 10
        }
    },
    "code": "SUCCESS"
}
```
