---
id: terminal-integration
title: "Terminal Integration"
sidebar_label: "Terminal Integration"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

# Terminal Integration

Terminal Integration allow businesses to process their orders using systems and process transactions more efficiency
using RM Terminal to improve customer experience by allowing them to pay using their preferred methods such as credit
cards, debit cards and e-wallets. The most common use cases integration are for **POS** & **Self Service Kiosk**
systems.

There's two type of API **Server** and **Event**, Event will send the action to the terminal from our server while *
*Server** will only process at our server and response to you directly. So **Event** may take some time to process and
also can fail when the terminal not connected to the server.

:::note
This integration can be applicable on any system as long as you're using our terminal for payment acceptance then you
can integrate this to trigger the payment with your own machine / system.
:::

## Event: Quick Pay

:::tip Information
If your hardware device have it's own scanner to scan the payment qrcode, you will not needed to use our terminal to
accept payment while you can proceed the [OpenAPI QuickPay](./quick-pay.md) instead to have better experience and
performance.
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/terminal/quickpay`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay`

**Request Parameters**

| Parameter              | Type   | Validation            | Required | Description                                                                                                                |
| ---------------------- | ------ | --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `terminalId`           | String |                       | Yes      | Terminal ID                                                                                                                |
| `type`                 | String | ENUM("E-WALLET")      | Yes      | Payment type                                                                                                               |
| `receiptType`          | Uint   | ENUM(1,2,3)           | Yes      | 1 : Print Merchant Copy and Customer copy<br />2 : Print Customer copy<br />3 : Do not print Merchant Copy & Customer Copy |
| `cameraType`           | String | ENUM("FRONT", "BACK") | Yes      | For "E-WALLET" only, use back or front camera to scan QR                                                                   |
| `order.id`             | String | Length(24)            | Yes      | Order ID                                                                                                                   |
| `order.title`          | String | Length(32)            | Yes      | Order Title                                                                                                                |
| `order.currencyType`   | String | ENUM("MYR")           | Yes      | Order Currency Type ( currently supported MYR only)                                                                        |
| `order.amount`         | Uint64 |                       | Yes      | Order Amount                                                                                                               |
| `order.detail`         | String | Length(600)           | No       | Order Detail                                                                                                               |
| `order.additionalData` | String | Length(128)           | No       | Order Additional Data                                                                                                      |

```json title="Example Request"
{
  "terminalId": "1554193032595276913",
  "type": "E-WALLET",
  "receiptType": 3,
  "cameraType": "FRONT",
  "order": {
    "amount": 10,
    "currencyType": "MYR",
    "id": "387153091916665362292147",
    "title": "title",
    "detail": "desc",
    "additionalData": "010100 Pay parking ticket\n30/07/20 07:13 - 30/07/20 18:40\nLength of stay: 0 Days. 11:35\n02993777014011020212260030??"
  }
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

## Event: Card Payment

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/terminal/quickpay`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay`

**Request Parameters**

| Parameter              | Type   | Validation            | Required | Description                                                                                                                |
| ---------------------- | ------ | --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `terminalId`           | String |                       | Yes      | Terminal ID                                                                                                                |
| `type`                 | String | ENUM("CARD")          | Yes      | Payment type                                                                                                               |
| `receiptType`          | Uint   | ENUM(1,2,3)           | Yes      | 1 : Print Merchant Copy and Customer copy<br />2 : Print Customer copy<br />3 : Do not print Merchant Copy & Customer Copy |
| `cameraType`           | String | ENUM("FRONT", "BACK") | Yes      | For "E-WALLET" only, use back or front camera to scan QR                                                                   |
| `order.id`             | String | Length(24)            | Yes      | Order ID                                                                                                                   |
| `order.title`          | String | Length(32)            | Yes      | Order Title                                                                                                                |
| `order.currencyType`   | String | ENUM("MYR")           | Yes      | Order Currency Type ( currently supported MYR only)                                                                        |
| `order.amount`         | Uint64 |                       | Yes      | Order Amount                                                                                                               |
| `order.detail`         | String | Length(600)           | No       | Order Detail                                                                                                               |
| `order.additionalData` | String | Length(128)           | No       | Order Additional Data                                                                                                      |

```json title="Example Request"
{
  "terminalId": "1554193032595276913",
  "type": "CARD",
  "receiptType": 3,
  "cameraType": "BACK",
  "order": {
    "amount": 10,
    "currencyType": "MYR",
    "id": "387153091916665362292147",
    "title": "title",
    "detail": "desc",
    "additionalData": "010100 Pay parking ticket\n30/07/20 07:13 - 30/07/20 18:40\nLength of stay: 0 Days. 11:35\n02993777014011020212260030??"
  }
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

## Event: Card Refund

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/event/terminal`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/event/terminal`

**Request Parameters**

| Parameter            | Type   | Validation     | Required | Description                                                                                                                |
| -------------------- | ------ | -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `terminalId`         | String |                | Yes      | Terminal ID                                                                                                                |
| `type`               | String | ENUM("REFUND") | Yes      | Event Type                                                                                                                 |
| `data.transactionId` | String | String         | Yes      | Transaction ID                                                                                                             |
| `data.receiptType`   | Uint   | ENUM(1,2,3)    |          | 1 : Print Merchant Copy and Customer copy<br />2 : Print Customer copy<br />3 : Do not print Merchant Copy & Customer Copy |
| `data.reason`        | String |                |          |                                                                                                                            |
| `data.email`         | String |                | Yes      | Email match with the refund pin                                                                                            |
| `data.pin`           | String | LENGTH(6)      | Yes      | Refund Pin                                                                                                                 |

```json title="Example Request"
{
  "terminalId": "1582107209454501456",
  "type": "REFUND",
  "data": {
    "transactionId": "210215083727100327507906",
    "receiptType": 3,
    "reason": "Testing Refund",
    "email": "oska.ng@revenuemonster.my",
    "pin": "321123"
  }
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

## Event: Card Settlement

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/event/terminal`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/event/terminal`

**Request Parameters**

| Parameter          | Type   | Validation         | Required | Description                                                                                                                |
| ------------------ | ------ | ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `terminalId`       | String |                    | Yes      | Terminal ID                                                                                                                |
| `type`             | String | ENUM("SETTLEMENT") | Yes      | Event Type                                                                                                                 |
| `data.receiptType` | Uint   | ENUM(1,2,3)        |          | 1 : Print Merchant Copy and Customer copy<br />2 : Print Customer copy<br />3 : Do not print Merchant Copy & Customer Copy |

```json title="Example Request"
{
  "terminalId": "1554193032595276913",
  "type": "SETTLEMENT",
  "data": {
    "receiptType": 3
  }
}
```

**Response Parameters**

| Parameter                       | Type   | Validation          | Description                                               |
| ------------------------------- | ------ | ------------------- | --------------------------------------------------------- |
| `code`                          | String | ENUM("SUCCESS")     | Determine request have success                            |
| `error.code`                    | String |                     | Error code                                                |
| `error.message`                 | String |                     | Error message                                             |
| `error.debug`                   | String |                     | Debug message ( sandbox only )                            |
| `summary.batchNo`               | String |                     | Sequence no. of the terminal settlement                   |
| `summary.currencyType`          | String | ENUM("MYR")         | Settlement Currency Type ( currently supported MYR only)  |
| `summary.noOfTransactions`      | Uint64 |                     | Count of settled transactions                             |
| `summary.settlementAt`          | String | RFC3339             | Date and time of the settlement                           |
| `summary.totalSalesAmount`      | Uint64 |                     | Total sales amount in cents                               |
| `transactions[*].amount`        | Uint64 |                     | Transactions amount in cents                              |
| `transactions[*].currencyType`  | Uint64 | ENUM("MYR")         | Transaction Currency Type ( currently supported MYR only) |
| `transactions[*].transactionAt` | String | RFC3339             | Date and time of the transaction                          |
| `transactions[*].transactionId` | String |                     | Transaction ID                                            |
| `transactions[*].type`          | String | ENUM("SALE","VOID") | Transaction type                                          |

## Event: Cancel Event

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/event/terminal`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/event/terminal`

**Request Parameters**

| Parameter    | Type   | Validation     | Required | Description |
| ------------ | ------ | -------------- | -------- | ----------- |
| `terminalId` | String |                | Yes      | Terminal ID |
| `type`       | String | ENUM("CANCEL") | Yes      | Event Type  |

```json title="Example Request"
{
  "terminalId": "1582107209454501456",
  "type": "CANCEL"
}
```

**Response Parameters**

| Parameter       | Type   | Validation      | Description                    |
| --------------- | ------ | --------------- | ------------------------------ |
| `code`          | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`    | String |                 | Error code                     |
| `error.message` | String |                 | Error message                  |
| `error.debug`   | String |                 | Debug message ( sandbox only ) |

## Server: Payment Refund

:::caution
This applicable to e-wallet transactions only, for card payment will have to perform refund on terminal via Event API.

Reference: [Cancel Transaction > Reverse](./cancel-transaction.md#refund)
:::

## Server: Payment Reverse

:::caution
This applicable to e-wallet transactions only, for card payment will have to perform refund on terminal via Event API.

Reference: [Cancel Transaction > Reverse](./cancel-transaction.md#refund)
:::