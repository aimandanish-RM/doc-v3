---
id: cancel-transaction
title: "Cancel Transaction"
sidebar_label: "Cancel Transaction"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Cancel Transaction

:::info Refund & Reverse
**Refund** is returns funds to the customer either before / after settlement date is based on the payment provider.

**Reverse** will cancel the transactions only between specific such as 15 minutes after transaction happened, mainly for integrator to handle some situation like bad connection to prevent double charges. 
:::

## Reverse

:::note
If a transaction is timed out, the merchant should perform a reverse order before creating a new transaction. This is to prevent a double charge.
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/reverse`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/reverse`

**Request Parameters**

| Parameter | Type   | Validation | Required | Description |
| --------- | ------ | ---------- | -------- | ----------- |
| `orderId` | String |            | Yes      | Order ID    |

```json title="Example Request"
{
  "orderId": "180730103903010431152179"
}
```

**Response Parameters**

| Parameter       | Type   | Validation                                                      | Description                    |
| --------------- | ------ | --------------------------------------------------------------- | ------------------------------ |
| `item`          | JSON   | [Transaction Object](./query-transaction.md#transaction-object) | Transaction response           |
| `code`          | String | ENUM("SUCCESS")                                                 | Determine request have success |
| `error.code`    | String |                                                                 | Error code                     |
| `error.message` | String |                                                                 | Error message                  |
| `error.debug`   | String |                                                                 | Debug message ( sandbox only ) |

## Refund

:::note
Transaction refundable is based on payment provider, so every payment have their own refund period if still need a refund after the period, please email to [support@revenuemonster.my](mailto:support@revenuemonster.my?subject=%5BRefund%20Request%5D). Format as per below is recommended :-

Email Subject: [Refund Request] Test Merchant - 4118165203679668885

Email Body:

Transaction ID: 230514103255300424706686<br />
Reference ID ( if applicable ): 20230512111212800110171906802679242<br />
Total Tranasaction Amount: RM 10.00<br />
Total Refund Amount ( if applicable ): RM 10.00<br />
Reason for refund request/s: Exceed refund period and would like to request manual refund
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/refund`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/refund`

**Request Parameters**

| Parameter             | Type   | Validation   | Required | Description          |
| --------------------- | ------ | ------------ | -------- | -------------------- |
| `transactionId`       | String |              | Yes      | Transaction ID       |
| `refund.type`         | String | ENUM("FULL") | Yes      | Refund type          |
| `refund.currencyType` | String | ENUM("MYR")  | Yes      | Refund currency type |
| `refund.amount`       | Uint64 |              | Yes      | Refund amount        |
| `reason`              | String |              | Yes      |                      |

```json title="Example Request"
{
  "transactionId": "180730103903010431152179",
  "refund": {
    "type": "FULL",
    "currencyType": "MYR",
    "amount": 100
  },
  "reason": "test"
}
```

**Response Parameters**

| Parameter       | Type   | Validation                                                      | Description                    |
| --------------- | ------ | --------------------------------------------------------------- | ------------------------------ |
| `item`          | JSON   | [Transaction Object](./query-transaction.md#transaction-object) | Transaction response           |
| `code`          | String | ENUM("SUCCESS")                                                 | Determine request have success |
| `error.code`    | String |                                                                 | Error code                     |
| `error.message` | String |                                                                 | Error message                  |
| `error.debug`   | String |                                                                 | Debug message ( sandbox only ) |