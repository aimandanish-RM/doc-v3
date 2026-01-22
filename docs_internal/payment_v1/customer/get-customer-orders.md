---
id: get-customer-orders
title: Get Customer Orders
sidebar_label: Get Customer Orders
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL :`https://open.revenuemonster.my/v3/customer/{customer_id}/orders`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/customer/{customer_id}/orders`

:::note
Get customer orders
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::


### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Object | Orders object                                                                                             | (Refer to explanation below) |
| `cursor`  | String | Pagination Cursor                                                                                         | ""                           |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Customer object (item):</strong>

| Parameter             | Type   | Description                                    | Example                  |
| --------------------- | ------ | ---------------------------------------------- | ------------------------ |
| `id`                  | String | Order ID                                       | 1668148680519476516      |
| `merchantId`          | String | Merchant ID                                    | 4118165203679668885      |
| `storeId`             | String | Store ID                                       | 1602660043994159611      |
| `recurringCustomerId` | String | Customer ID                                    | 1667293245664231338      |
| `transactionId`       | String | Payment Transaction ID                         | 221111000209600428405230 |
| `status`              | String | Payment Status                                 | FAILED                   |
| `recurringReference`  | String | Recurring reference ( internal use only )      | 20221111                 |
| `createdAt`           | String | Created DateTime timstamp in RFC3339 formatted | 2022-11-11T06:38:00Z     |
| `updatedAt`           | String | Updated DateTime timstamp in RFC3339 formatted | 2022-11-11T06:38:00Z     |
| `currency`            | String | Recurring payment currency                     | MYR                      |
| `amount`              | Int64  | Recurring payment amount                       | 1000                     |
> Example Response

```json
{
    "items": [
        {
            "id": "1667543550109431228",
            "paymentUrl": "",
            "recurringPaymentId": "0",
            "recurringCustomerId": "1667293245664231338",
            "merchantId": "4118165203679668885",
            "storeId": "1602660043994159611",
            "checkoutId": "",
            "transactionId": "221104063230600413605703",
            "status": "SUCCESS",
            "recurringReference": "20221104",
            "createdAt": "2022-11-04T06:32:30Z",
            "updatedAt": "2022-11-04T06:32:52Z",
            "amount": 120,
            "currency": "MYR"
        },
        {
            "id": "1667606401387187608",
            "paymentUrl": "",
            "recurringPaymentId": "0",
            "recurringCustomerId": "1667293245664231338",
            "merchantId": "4118165203679668885",
            "storeId": "1602660043994159611",
            "checkoutId": "",
            "transactionId": "221105000002600421773870",
            "status": "SUCCESS",
            "recurringReference": "20221105",
            "createdAt": "2022-11-05T00:00:01Z",
            "updatedAt": "2022-11-05T00:00:31Z",
            "amount": 120,
            "currency": "MYR"
        },
        {
            "id": "1667692806612780074",
            "paymentUrl": "",
            "recurringPaymentId": "0",
            "recurringCustomerId": "1667293245664231338",
            "merchantId": "4118165203679668885",
            "storeId": "1602660043994159611",
            "checkoutId": "",
            "transactionId": "221106000006600429040844",
            "status": "SUCCESS",
            "recurringReference": "20221106",
            "createdAt": "2022-11-06T00:00:06Z",
            "updatedAt": "2022-11-06T00:00:46Z",
            "amount": 120,
            "currency": "MYR"
        },
        {
            "id": "1667779202551799061",
            "paymentUrl": "",
            "recurringPaymentId": "0",
            "recurringCustomerId": "1667293245664231338",
            "merchantId": "4118165203679668885",
            "storeId": "1602660043994159611",
            "checkoutId": "",
            "transactionId": "221107000002600429964014",
            "status": "SUCCESS",
            "recurringReference": "20221107",
            "createdAt": "2022-11-07T00:00:02Z",
            "updatedAt": "2022-11-07T00:00:45Z",
            "amount": 120,
            "currency": "MYR"
        },
        {
            "id": "1667865606600060141",
            "paymentUrl": "",
            "recurringPaymentId": "0",
            "recurringCustomerId": "1667293245664231338",
            "merchantId": "4118165203679668885",
            "storeId": "1602660043994159611",
            "checkoutId": "",
            "transactionId": "221108000006600421526445",
            "status": "SUCCESS",
            "recurringReference": "20221108",
            "createdAt": "2022-11-08T00:00:06Z",
            "updatedAt": "2022-11-08T00:00:53Z",
            "amount": 120,
            "currency": "MYR"
        },
        {
            "id": "1667952007926808022",
            "paymentUrl": "https://sb-pg.revenuemonster.my/v3/checkout?checkoutId=1667970581783352839",
            "recurringPaymentId": "0",
            "recurringCustomerId": "1667293245664231338",
            "merchantId": "4118165203679668885",
            "storeId": "1602660043994159611",
            "checkoutId": "1667970581783352839",
            "transactionId": "221111000011600427103494",
            "status": "FAILED",
            "recurringReference": "20221109",
            "createdAt": "2022-11-09T00:00:07Z",
            "updatedAt": "2022-11-11T00:01:21Z",
            "amount": 120,
            "currency": "MYR"
        },
        {
            "id": "1668038496940122771",
            "paymentUrl": "",
            "recurringPaymentId": "0",
            "recurringCustomerId": "1667293245664231338",
            "merchantId": "4118165203679668885",
            "storeId": "1602660043994159611",
            "checkoutId": "",
            "transactionId": "221111000121600427823433",
            "status": "FAILED",
            "recurringReference": "20221110",
            "createdAt": "2022-11-10T00:01:36Z",
            "updatedAt": "2022-11-11T00:02:09Z",
            "amount": 120,
            "currency": "MYR"
        },
        {
            "id": "1668124929906366654",
            "paymentUrl": "",
            "recurringPaymentId": "0",
            "recurringCustomerId": "1667293245664231338",
            "merchantId": "4118165203679668885",
            "storeId": "1602660043994159611",
            "checkoutId": "",
            "transactionId": "221111000209600428405230",
            "status": "FAILED",
            "recurringReference": "20221111",
            "createdAt": "2022-11-11T00:02:09Z",
            "updatedAt": "2022-11-11T00:02:57Z",
            "amount": 120,
            "currency": "MYR"
        }
    ],
    "code": "SUCCESS",
    "meta": {}
}
```
