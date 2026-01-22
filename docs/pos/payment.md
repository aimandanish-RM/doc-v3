---
id: payment
title: POS Terminal Integration
sidebar_label: POS Terminal Integration
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/terminal/quickpay`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay`

:::note
Integrate RM Terminal with POS System or Kiosk machine (using local callback). This endpoint only supports payment initiation. For other methods (refund/reverse/settlement), please follow back refund , reverse , settlement API standard steps accordingly.
:::

### Request Parameters

| Parameter     | Type   | Required | Description                                                                                                                 | Example               |
| ------------- | ------ | :------: | --------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `terminalId`  | String |   Yes    | Terminal ID                                                                                                                 | "1582107209454501456" |
| `type`        | String |   Yes    | e-wallet "E-WALLET" or Bank card "CARD" payment                                                                             | "E-WALLET"            |
| `receiptType` | Uint   |   Yes    | 1 : Print Merchant Copy and Customer copy <br/> 2 : Print Customer copy <br/>3 : Do not print Merchant Copy & Customer Copy | 1                     |
| `cameraType`  | String |   Yes    | For "E-WALLET" only, use back or front camera to scan QR                                                                    | "FRONT"               |
| `order`       | String |   Yes    | (Refer `order` )                                                                                                            | {}                    |

<br/>
<strong>Order object (order):</strong>

| Parameter        | Type   | Required | Description                                         | Example        |
| ---------------- | ------ | -------- | --------------------------------------------------- | -------------- |
| `amount`         | Uint   | Yes      | Amount of order in cent (min RM 0.10 or amount: 10) | 100            |
| `currencyType`   | String | Yes      | Currency notation (currently only support MYR)      | "MYR"          |
| `id`             | String | Yes      | Order ID (from Merchant), max: 24                   | "123443333304" |
| `title`          | String | Yes      | Order title, max: 32                                | "title"        |
| `details`        | String | Yes      | Order details, max: 600                             | "desc"         |
| `additionalData` | String | Yes      | For merchant's remark, max 128                      | "API Test"     |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/payment/terminal/quickpay" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \
--header "X-Signature: sha256 GohuT2QTUXJV3MZh2OoEE9qW9wcfakOU9iVLmkTjM12NQuV6IcWMRQDz9NdxAOVIrh5MssfYCLDlafb2illXxgQMpmZkZ38NT6NQsMeMfGbHBS1Kc+BUtU7o1TMLUzk55J1tA6f0Z95oEuBlCeLm6VsgCG30wFm5YmgssJ0weIwMcW355r2sFl7QcKOuRqynoGtmmr/aGfOk1HjiFLoFzSd38O7rRjwGrekYwuYUD1N/Wp5GFXRjtaaPkzAERPbXEmnh/taLME8VeAhky6dAVGZE6gHKnP5WvvVjUE+KLtj3D32YIHzxhzEW9x3JEObqgvm5Q2oRZNxoh6/MvqwkVA==" \
--header "X-Nonce-Str: bfdgdjgtjhmnbmmjmdfdghghffj" \
--header "X-Timestamp: 1546850694" \
--data-raw {
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

### Response Parameters

| Parameter       | Type     | Description                                            | Example                               |
| --------------- | -------- | ------------------------------------------------------ | ------------------------------------- |
| `balanceAmount` | Uint     | Amount of order in cent                                | 10                                    |
| `createdAt`     | DateTime | Creation date time of store                            | "2020-02-13T07:08:56Z"                |
| `currencyType`  | String   | Currency notation (currently only support `MYR`)       | "MYR"                                 |
| `extraInfo`     | Object   | for CARD payment (Refer to extraInfo)                  | {}                                    |
| `method`        | String   | [RM currently supported method](../payment-method.mdx) | "CARD"                                |
| `order`         | String   | (Refer `order` )                                       | {}                                    |
| `payee`         | Object   | for E-WALLET payment (Refer to payee)                  | {}                                    |
| `platform`      | String   | Only "TERMINAL"                                        | "TERMINAL"                            |
| `referenceId`   | String   | Transaction ID (from server)                           | "00000000000791320002737201919250001" |
| `region`        | String   | Region of wallet                                       | "MALAYSIA"                            |
| `status`        | String   | Status returned from WeChat server                     | "SUCCESS"                             |
| `store`         | Object   | (Refer to store)                                       | {}                                    |
| `transactionAt` | DateTime | Transaction date time of store                         | "2020-10-25T04:35:22Z"                |
| `transactionId` | DateTime | Transaction ID generated from Revenue Monster.         | "200213070856100322408442"            |
| `type`          | String   | "QUICKPAY" or "BANK_CARD"                              | "BANK_CARD"                           |
| `updatedAt`     | DateTime | Last update date time of store                         | "2020-02-13T07:08:56Z"                |

<br/>
<strong>Extra Info object (extraInfo):</strong>

| Parameter | Type   | Required | Description         | Example                      |
| --------- | ------ | -------- | ------------------- | ---------------------------- |
| `card`    | Object | Yes      | Object of card Info | (Refer to explanation below) |

<br/>
<strong>Card object (card):</strong>

| Parameter              | Type   | Required | Description                  | Example               |
| ---------------------- | ------ | -------- | ---------------------------- | --------------------- |
| `inputType`            | String | Yes      | Type of card payment         | "NFC"                 |
| `maskNo`               | String | Yes      | Masked card no               | "XXXX-XXXX-XXXX-9081" |
| `referenceId`          | String | Yes      | Card payment ref on server   | "104974001774"        |
| `secondaryReferenceId` | String | Yes      | Card payment ref on terminal | "001774"              |

<br/>
<strong>Order object (order):</strong>

| Parameter        | Type   | Required | Description                                         | Example               |
| ---------------- | ------ | -------- | --------------------------------------------------- | --------------------- |
| `amount`         | Uint   | Yes      | Amount of order in cent (min RM 0.10 or amount: 10) | 10                    |
| `id`             | String | Yes      | Order ID (from Merchant), max: 24                   | "201919250001"        |
| `title`          | String | Yes      | Order title, max: 32                                | "SALE"                |
| `details`        | String | Yes      | Order details, max: 600                             | "XXXX-XXXX-XXXX-3121" |
| `additionalData` | String | Yes      | For merchant's remark, max 128                      | "000008"              |

<br/>
<strong>Payee object (payee):</strong>

| Parameter | Type   | Required | Description      | Example            |
| --------- | ------ | -------- | ---------------- | ------------------ |
| `userId`  | String | Yes      | Payee account id | "1000000806040489" |

<br />
<strong>Store object (store):</strong>

| Parameter      | Type              | Description                                     | Example                                             |
| -------------- | ----------------- | ----------------------------------------------- | --------------------------------------------------- |
| `id`           | String            | Store ID                                        | "6170506694335521334"                               |
| `name`         | String            | Store Name                                      | "REVENUE MONSTER"                                   |
| `addressLine1` | String            | Store Address 1                                 | "B-5-30, 5th Floor, Block Bougainvillea,"           |
| `addressLine2` | String            | Store Address 2                                 | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"           |
| `postCode`     | String            | Postcode of store                               | "47400"                                             |
| `city`         | String            | City of store                                   | "Petaling Jaya"                                     |
| `state`        | String            | State of store                                  | "Selangor"                                          |
| `country`      | String            | Country of store                                | "Malaysia"                                          |
| `countryCode`  | String            | Country code of store contact number            | "60"                                                |
| `phoneNumber`  | String            | Phone number of store                           | "377334080"                                         |
| `geoLocation`  | Object of [Float] | Geo Location (latitude and longtitude) of store | {"latitude": 3.1349857, "longtitude": 101.6136659 } |
| `status`       | String            | Current status of store                         | "ACTIVE"                                            |
| `createdAt`    | DateTime          | Creation date time of store                     | "2018-02-12T08:53:13Z"                              |
| `updatedAt`    | DateTime          | Last update date time of store                  | "2018-02-12T08:53:13Z"                              |

> Example Response

```json
{
  "balanceAmount": 10,
  "createdAt": "2021-02-17T18:39:30Z",
  "currencyType": "MYR",
  "extraInfo": {
    "card": {
      "inputType": "NFC",
      "maskNo": "XXXX-XXXX-XXXX-9081",
      "referenceId": "104983001779",
      "secondaryReferenceId": "001779"
    }
  },
  "method": "CARD",
  "order": {
    "additionalData": "010100 Pay parking ticket\n30/07/20 07:13 - 30/07/20 18:40\nLength of stay: 0 Days. 11:35\n02993777014011020212260030??",
    "amount": 10,
    "detail": "desc",
    "id": "387153091916665362292147",
    "title": "title"
  },
  "payee": {
    "userId": "1000000806040489"
  },
  "platform": "TERMINAL",
  "referenceId": "00000000000550520003236104983001779",
  "region": "MALAYSIA",
  "status": "SUCCESS",
  "store": {
    "addressLine1": "UTROPOLIS MARKETPLACE,  JALAN KONTRAKTOR U1/14,  SHAH ALAM",
    "addressLine2": "UTROPOLIS MARKETPLACE,  JALAN KONTRAKTOR U1/14,  SHAH ALAM",
    "city": "Shah Alam",
    "country": "Malaysia",
    "countryCode": "60",
    "createdAt": "2021-01-08T10:09:23Z",
    "geoLocation": {
      "latitude": 3.0901139,
      "longitude": 101.55987
    },
    "id": "1601912947341252990",
    "name": "Mountain Food - Utropolis",
    "phoneNumber": "1123621544",
    "postCode": "40150",
    "state": "Selangor",
    "status": "ACTIVE",
    "updatedAt": "2021-01-08T10:09:23Z"
  },
  "transactionAt": "2021-02-18T02:39:35+08:00",
  "transactionId": "210217183930100325434403",
  "type": "BANK_CARD",
  "updatedAt": "2021-02-17T18:39:37Z"
}
```
