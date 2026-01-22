---
id: toggle-customer-status
title: Toggle Customer Status
sidebar_label: Toggle Customer Status
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>PUT</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}/status`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}/status`

:::note
Toggle customer status
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::


### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Customer object                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Customer object (item):</strong>

| Parameter             | Type    | Description                                                      | Example                                                                     |
| --------------------- | ------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                  | String  | Customer ID                                                      | 1668148680519476516                                                         |
| `merchantId`          | String  | Merchant ID                                                      | 4118165203679668885                                                         |
| `storeId`             | String  | Store ID                                                         | 1602660043994159611                                                         |
| `email`               | String  | Customer email                                                   | dev@revenuemonster.my                                                       |
| `name`                | String  | Customer name                                                    | RM Developer                                                                |
| `countryCode`         | String  | Customer country code                                            | 60                                                                          |
| `phoneNumber`         | String  | Customer phone number                                            | 103603440                                                                   |
| `isActive`            | bool    | Customer active status ( no card bind will always be false )     | true                                                                        |
| `createdAt`           | String  | Created DateTime timstamp in RFC3339 formatted                   | 2022-11-11T06:38:00Z                                                        |
| `updatedAt`           | String  | Updated DateTime timstamp in RFC3339 formatted                   | 2022-11-11T06:38:00Z                                                        |
| `clientKey`           | String  | Customer client key ( internal usage only )                      | EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg                                          |
| `currency`            | String  | Recurring payment currency                                       | MYR                                                                         |
| `amount`              | Int64   | Recurring payment amount                                         | 1000                                                                        |
| `redirectUrl`         | String  | Redirect URL after customer bind card                            | https://google.com                                                          |
| `notifyUrl`           | String  | Notify URL when payment has made                                 | https://google.com                                                          |
| `recurringInterval`   | String  | Recurring payment interval could be `MONTHLY`, `WEEKLY`, `DAILY` | WEEKLY                                                                      |
| `recurringTarget`     | String  | Recurring target rules can be different values based on interval | 1                                                                           |
| `recurringRepetition` | Integer | No                                                               | Recurring repetition rules, how many times charge the customer card         | 1 |
| `productName`         | String  | Recurring product title                                          | Recurring Product                                                           |
| `productDescription`  | String  | Recurring product description                                    | Recurring description                                                       |
| `paymentUrl`          | String  | Payment URL for Customer bind their Card Information             | https://sb-pg.revenuemonster.my/v1/recurring?customerId=1668148680519476516 |

> Example Response

```json
{
    "item": {
        "id": "1668148680519476516",
        "paymentUrl": "https://sb-pg.revenuemonster.my/v1/recurring?customerId=1668148680519476516",
        "recurringPaymentId": "",
        "merchantId": "4118165203679668885",
        "storeId": "1602660043994159611",
        "email": "dev@revenuemonster.my",
        "name": "RM Developer",
        "countryCode": "60",
        "phoneNumber": "103603440",
        "isActive": false,
        "createdAt": "2022-11-11T06:38:00Z",
        "updatedAt": "2022-11-11T06:38:00Z",
        "clientKey": "EhcKC09BdXRoQ2xpZW50EMWa54yytMPIFg",
        "amount": 100,
        "redirectUrl": "https://google.com",
        "notifyUrl": "https://google.com",
        "recurringInterval": "WEEKLY",
        "recurringTarget": "1",
        "productName": "some recurring product",
        "productDescription": "some recurrnig description"
    },
    "code": "SUCCESS"
}
```
