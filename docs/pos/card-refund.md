---
id: card-refund
title: Card Payment Refund
sidebar_label: Card Payment Refund
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/event/terminal`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/event/terminal`

### Request Parameters

| Parameter    | Type   | Required | Description     | Example               |
| ------------ | ------ | :------: | --------------- | --------------------- |
| `terminalId` | String |   Yes    | Terminal ID     | "1582107209454501456" |
| `type`       | String |   Yes    | Request type    | "REFUND"              |
| `data`       | String |   Yes    | (Refer `data` ) | {}                    |

<strong>Data object (data):</strong>

| Parameter       | Type   | Required | Description                                                                                                                 | Example                     |
| --------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `transactionId` | String | Yes      | Transaction ID generated from Revenue Monster.                                                                              | "1582107209454501456"       |
| `receiptType`   | Uint   | Yes      | 1 : Print Merchant Copy and Customer copy <br/> 2 : Print Customer copy <br/>3 : Do not print Merchant Copy & Customer Copy | 1                           |
| `reason`        | String | Yes      | Refund reason                                                                                                               | "Wrong Item"                |
| `email`         | String | Yes      | Refund email                                                                                                                | "oska.ng@revenuemonster.my" |
| `pin`           | String | Yes      | Refund pin                                                                                                                  | "321123"                    |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/event/terminal" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \
--header "X-Signature: sha256 GohuT2QTUXJV3MZh2OoEE9qW9wcfakOU9iVLmkTjM12NQuV6IcWMRQDz9NdxAOVIrh5MssfYCLDlafb2illXxgQMpmZkZ38NT6NQsMeMfGbHBS1Kc+BUtU7o1TMLUzk55J1tA6f0Z95oEuBlCeLm6VsgCG30wFm5YmgssJ0weIwMcW355r2sFl7QcKOuRqynoGtmmr/aGfOk1HjiFLoFzSd38O7rRjwGrekYwuYUD1N/Wp5GFXRjtaaPkzAERPbXEmnh/taLME8VeAhky6dAVGZE6gHKnP5WvvVjUE+KLtj3D32YIHzxhzEW9x3JEObqgvm5Q2oRZNxoh6/MvqwkVA==" \
--header "X-Nonce-Str: bfdgdjgtjhmnbmmjmdfdghghffj" \
--header "X-Timestamp: 1546850694" \
--data-raw {
    "terminalId": "1582107209454501456",
    "type": "REFUND",
    "data": {
        "transactionId": "210215083727100327507906",
        "receiptType": 3,
        "reason": "Testing",
        "email": "oska.ng@revenuemonster.my",
        "pin": "321123"
    }
}
```

<br/>

### Response Parameters

| Parameter       | Type     | Description                                                                                               | Example                               |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `balanceAmount` | Uint     | Amount of order in cent                                                                                   | 10                                    |
| `createdAt`     | DateTime | Creation date time of store                                                                               | "2020-02-13T07:08:56Z"                |
| `currencyType`  | String   | Currency notation (currently only support `MYR`)                                                          | "MYR"                                 |
| `extraInfo`     | Object   | (Refer to extraInfo)                                                                                      | {}                                    |
| `method`        | String   | [RM currently supported method](../payment-method.mdx)                                                    | "CARD"                                |
| `order`         | String   | (Refer to order)                                                                                          | {}                                    |
| `platform`      | String   | Only "TERMINAL"                                                                                           | "TERMINAL"                            |
| `referenceId`   | String   | Transaction ID (from server)                                                                              | "00000000000791320002737201919250001" |
| `region`        | String   | Region of wallet                                                                                          | "MALAYSIA"                            |
| `status`        | String   | Status returned from WeChat server                                                                        | "SUCCESS"                             |
| `transactionAt` | DateTime | Transaction date time of store                                                                            | "2020-10-25T04:35:22Z"                |
| `transactionId` | DateTime | Transaction ID generated from Revenue Monster.                                                            | "200213070856100322408442"            |
| `type`          | String   | "QUICKPAY" or "BANK_CARD"                                                                                 | "BANK_CARD"                           |
| `updatedAt`     | DateTime | Last update date time of store                                                                            | "2020-02-13T07:08:56Z"                |
| `code`          | String   | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                             |
| `error`         | Object   | (Refer `Appendix: Error Codes`)                                                                           | {}                                    |

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

> Example Response

```json
{
  "code": "SUCCESS",
  "item": {
    "balanceAmount": 0,
    "createdAt": "2021-02-17T17:43:59Z",
    "currencyType": "MYR",
    "extraInfo": {
      "card": {
        "inputType": "NFC",
        "maskNo": "XXXX-XXXX-XXXX-9081",
        "referenceId": "104974001774",
        "secondaryReferenceId": "001774"
      }
    },
    "method": "CARD",
    "order": {
      "additionalData": "In store payment",
      "amount": 10,
      "detail": "[Terminal app] Pay to Mountain Food - Utropolis",
      "id": "1613583839549PE24191B504",
      "title": "In store payment"
    },
    "platform": "TERMINAL",
    "referenceId": "00000000000550520003236104974001774",
    "region": "MALAYSIA",
    "status": "FULL_REFUNDED",
    "transactionAt": "2021-02-17T17:44:02Z",
    "transactionId": "210217174359100325085446",
    "type": "BANK_CARD",
    "updatedAt": "2021-02-17T17:44:30Z"
  }
}
```
