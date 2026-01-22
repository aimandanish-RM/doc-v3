---
id: quick-pay
title: "Quick Pay"
sidebar_label: "Quick Pay"
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

<Box
  sx={{
    width: "100%",
    height: 0,
    paddingBottom: 900 / 16 + "%",
    position: "relative",
    overflow: "hidden",
    "& > iframe": {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      bottom: 0,
      left: 0,
      border: 0,
    },
  }}
>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/sGmQCTvXORQ"
    frameBorder="0"
    allowFullScreen
  />
</Box>

<br />

# Quick Pay

Quick Pay allows businesses to accept payments from customers using a mobile app or QR code. 
With Revenue Monster's Quick Pay, customers can simply scan a QR code displayed by the merchant, 
and then make a payment using their preferred payment method such as credit card, debit card, or e-wallet. 
This process is quick, easy, and secure, allowing businesses to accept payments from their customers with minimal effort.

:::info
Quick Pay is an offline payment method and it's subscription will based on offline subscription rate.
:::

<Flex justifyContent="center">
  <Button
    width="100%"
    sx={{
      ":hover": {
        backgroundColor: "blue",
      },
      backgroundColor: "#528ef7",
      borderRadius: 15,
    }}
    onClick={() => {
      window.location.href =
        "https://drive.google.com/drive/folders/1x5jjspiW46mPKXbFO-0d-BZoyjpM1kp4?usp=sharing";
    }}
  >
    Sequence Diagram
  </Button>
</Flex>

## Standard Quick Pay


**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/quickpay`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/quickpay`

**Request Parameters**

| Parameter              | Type   | Validation  | Required | Description                                         |
| ---------------------- | ------ | ----------- | -------- | --------------------------------------------------- |
| `authCode`             | String |             | Yes      | Auth code of QR code/barcode being scanned          |
| `ipAddress`            | String | IPV4 / IPV6 | Yes      | IP address of terminal/application for payment      |
| `storeId`              | String |             | Yes      | Revenue Monster Store ID                            |
| `order.id`             | String | Length(24)  | Yes      | Order ID                                            |
| `order.title`          | String | Length(32)  | Yes      | Order Title                                         |
| `order.currencyType`   | String | ENUM("MYR") | Yes      | Order Currency Type ( currently supported MYR only) |
| `order.amount`         | Uint64 |             | Yes      | Order Amount                                        |
| `order.detail`         | String | Length(600) | No       | Order Detail                                        |
| `order.additionalData` | String | Length(128) | No       | Order Additional Data                               |

```json title="Example Request"
{
    "authCode": "134850717797247290",
    "storeId": "6170506694335521334",
    "ipAddress": "8.8.8.8",
    "order": {
        "id": "ODR-20230513-1001",
        "title": "Payment via OpenAPI",
        "currencyType": "MYR",
        "amount": 1000,
        "detail": "",
        "additionalData": "",
    },
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

## Quick Pay + Voucher

:::tip About voucher redemption flow
Voucher can be generated as a QRCode for scanning the voucher code, so we suggest to scan the voucher qrcode first then only go for the wallet's qrcode.
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/quickpay`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/quickpay`

**Request Parameters**

| Parameter              | Type   | Validation  | Required | Description                                         |
| ---------------------- | ------ | ----------- | -------- | --------------------------------------------------- |
| `authCode`             | String |             | Yes      | Auth code of QR code/barcode being scanned          |
| `ipAddress`            | String | IPV4 / IPV6 | Yes      | IP address of terminal/application for payment      |
| `storeId`              | String |             | Yes      | Revenue Monster Store ID                            |
| `order.id`             | String | Length(24)  | Yes      | Order ID                                            |
| `order.title`          | String | Length(32)  | Yes      | Order Title                                         |
| `order.currencyType`   | String | ENUM("MYR") | Yes      | Order Currency Type ( currently supported MYR only) |
| `order.amount`         | Uint64 |             | Yes      | Order Amount                                        |
| `order.detail`         | String | Length(600) | No       | Order Detail                                        |
| `order.additionalData` | String | Length(128) | No       | Order Additional Data                               |
| `voucher.code`         | String |             | No       | Revenue Monster Voucher Code                        |

```json title="Example Request"
{
    "authCode": "134850717797247290",
    "storeId": "6170506694335521334",
    "ipAddress": "8.8.8.8",
    "order": {
        "id": "ODR-20230513-1001",
        "title": "Payment via OpenAPI",
        "currencyType": "MYR",
        "amount": 1000,
        "detail": "",
        "additionalData": "",
    },
    "voucher": {
      "code": "haYkAch3VN"
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

## Quick Pay + Spending Loyalty

:::info About QRCODE Type
You will receive extra parameteres in the transaction response and you will need to print the generate the qrcode and print it out in receipt so the customer able to use their loyalty program to retrieve the spending loyalty's points.

Reference: [Transaction Object > Spending Loyalty](./query-transaction.md#spending-loyalty)
:::

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/quickpay`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/quickpay`

**Request Parameters**

| Parameter              | Type   | Validation                          | Required    | Description                                          |
| ---------------------- | ------ | ----------------------------------- | ----------- | ---------------------------------------------------- |
| `authCode`             | String |                                     | Yes         | Auth code of QR code/barcode being scanned           |
| `ipAddress`            | String | IPV4 / IPV6                         | Yes         | IP address of terminal/application for payment       |
| `storeId`              | String |                                     | Yes         | Revenue Monster Store ID                             |
| `order.id`             | String | Length(24)                          | Yes         | Order ID                                             |
| `order.title`          | String | Length(32)                          | Yes         | Order Title                                          |
| `order.currencyType`   | String | ENUM("MYR")                         | Yes         | Order Currency Type ( currently supported MYR only ) |
| `order.amount`         | Uint64 |                                     | Yes         | Order Amount                                         |
| `order.detail`         | String | Length(600)                         | No          | Order Detail                                         |
| `order.additionalData` | String | Length(128)                         | No          | Order Additional Data                                |
| `loyalty.type`         | String | ENUM("QRCODE", "PHONENUMBER", "ID") | No          | Loyalty type                                         |
| `loyalty.memberId`     | String | Required when type="ID"             | Conditional | Loyalty Member's ID                                  |
| `loyalty.countryCode`  | String | Required when type="PHONENUMBER"    | Conditional | Loyalty Member's Country Code                        |
| `loyalty.phoneNumber`  | String | Required when type="PHONENUMBER"    | Conditional | Loyalty Member's Phone Number                        |

```json title="Example Request"
{
    "authCode": "134850717797247290",
    "storeId": "6170506694335521334",
    "ipAddress": "8.8.8.8",
    "order": {
        "id": "ODR-20230513-1001",
        "title": "Payment via OpenAPI",
        "currencyType": "MYR",
        "amount": 1000,
        "detail": "",
        "additionalData": "",
    },
    "loyalty": {
      "type": "PHONENUMBER",
      "countryCode": "60",
      "phoneNumber": "103403660"
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

## Quick Pay + Membership Card

:::info
Currently available membership card only Alipay's Gourmet Card ( 马来西亚美食优惠卡 )
:::

### Verify Membership Card

**Request Parameters**
**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/membership/verify`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/membership/verify`

**Request Parameters**

| Parameter    | Type   | Validation | Required | Description             |
| ------------ | ------ | ---------- | -------- | ----------------------- |
| memberCardId | String |            | Yes      | Alipay's Member Card ID |
| storeId      | String |            | Yes      | Store ID                |

```json title="Example Request"
{
  "memberCardId": "28158443195878043074",
  "storeId": "4949529109748431621"
}
```

**Response Parameters**

| Parameter       | Type   | Validation      | Description                    |
| --------------- | ------ | --------------- | ------------------------------ |
| `code`          | String | ENUM("SUCCESS") | Determine request have success |
| `error.code`    | String |                 | Error code                     |
| `error.message` | String |                 | Error message                  |
| `error.debug`   | String |                 | Debug message ( sandbox only ) |


### Quick Pay

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/quickpay`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/quickpay`

**Request Parameters**

| Parameter              | Type   | Validation  | Required | Description                                         |
| ---------------------- | ------ | ----------- | -------- | --------------------------------------------------- |
| `authCode`             | String |             | Yes      | Auth code of QR code/barcode being scanned          |
| `ipAddress`            | String | IPV4 / IPV6 | Yes      | IP address of terminal/application for payment      |
| `storeId`              | String |             | Yes      | Revenue Monster Store ID                            |
| `order.id`             | String | Length(24)  | Yes      | Order ID                                            |
| `order.title`          | String | Length(32)  | Yes      | Order Title                                         |
| `order.currencyType`   | String | ENUM("MYR") | Yes      | Order Currency Type ( currently supported MYR only) |
| `order.amount`         | Uint64 |             | Yes      | Order Amount                                        |
| `order.detail`         | String | Length(600) | No       | Order Detail                                        |
| `order.additionalData` | String | Length(128) | No       | Order Additional Data                               |
| `extraInfo.type`       | String |             | No       | Extra Type "MEMBERSHIP"                             |
| `extraInfo.reference`  | String |             | No       | Membership Card ID                                  |

```json title="Example Request"
{
    "authCode": "134850717797247290",
    "storeId": "6170506694335521334",
    "ipAddress": "8.8.8.8",
    "order": {
        "id": "ODR-20230513-1001",
        "title": "Payment via OpenAPI",
        "currencyType": "MYR",
        "amount": 1000,
        "detail": "",
        "additionalData": "",
    },
    "extraInfo": {
      "type": "MEMBERSHIP",
      "reference": "28158443195878043074"
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