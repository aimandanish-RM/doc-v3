---
id: reconciliation
title: "Reconciliation"
sidebar_label: "Reconciliation"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL :`https://open.revenuemonster.my/v3/payment/reconciliation`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/reconciliation`

**Request Parameters**

| Parameter         | Type         | Validation                                                            | Required | Description        |
| ----------------- | ------------ | --------------------------------------------------------------------- | -------- | ------------------ |
| `transactionType` | String       | ENUM("PAYMENT", "REFUND")                                             | No       | Terminal ID        |
| `date`            | String       | YYYY-MM-DD                                                            | Yes      | Transaction date   |
| `method`          | List(String) | [Appendix: Method](./query-transaction.md#transaction-method--region) | No       | Transaction method |
| `region`          | List(String) | [Appendix: Region](./query-transaction.md#transaction-method--region) | No       | Transaction region |
| `cursor`          | String       |                                                                       | No       | Pagination cursor  |

```json title="Example Request"
{
    "transactionType": "PAYMENT",
    "date": "2021-07-28",
    "method": ["BOOST"],
    "region": ["MALAYSIA"],
    "cursor": "",
}
```

**Response Parameters**

| Parameter                  | Type   | Validation                                                | Description                        |
| -------------------------- | ------ | --------------------------------------------------------- | ---------------------------------- |
| `items.*.transactionAt`    | String | RFC3339                                                   | Transaction date time              |
| `items.*.merchantId`       | String |                                                           | Merchant ID                        |
| `items.*.merchantName`     | String |                                                           | Merchant Name                      |
| `items.*.storeId`          | String |                                                           | Store ID                           |
| `items.*.storeName`        | String |                                                           | Store Name                         |
| `items.*.region`           | String |                                                           | Transaction region                 |
| `items.*.method`           | String |                                                           | Transaction method                 |
| `items.*.transactionType`  | String | ENUM("PAYMENT", "REFUND")                                 | Transaction payment or refund type |
| `items.*.type`             | String | [Appendix: Type](./query-transaction.md#transaction-type) | Transaction type                   |
| `items.*.transactionId`    | String |                                                           | Transaction ID                     |
| `items.*.orderId`          | String |                                                           | Order ID                           |
| `items.*.currencyType`     | String | ENUM("MYR")                                               | Transaction currency type          |
| `items.*.grossAmount`      | String |                                                           | Transaction gross amount           |
| `items.*.mdr`              | String |                                                           | Transaction mdr amount             |
| `items.*.serviceFee`       | String |                                                           | Transaction service fee            |
| `items.*.settlementAmount` | String |                                                           | Transaction settlement amount      |
| `meta.cursor`              | String |                                                           | Pagination cursor                  |
| `code`                     | String | ENUM("SUCCESS")                                           | Determine request have success     |
| `error.code`               | String |                                                           | Error code                         |
| `error.message`            | String |                                                           | Error message                      |
| `error.debug`              | String |                                                           | Debug message ( sandbox only )     |
