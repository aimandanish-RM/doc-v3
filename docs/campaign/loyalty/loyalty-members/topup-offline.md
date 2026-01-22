---
id: topup-offline
title: Topup Balance Offline ( QuickPay )
sidebar_label: Topup Balance Offline ( QuickPay )
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/member/:memberId/topup-offline`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/member/:memberId/topup-offline`

:::note
Specify loyalty member id to topup using quickpay
:::

### Request Parameters

| Parameter  | Type   | Required | Description                                            | Example                      |
| ---------- | ------ | -------- | ------------------------------------------------------ | ---------------------------- |
| `authCode` | String | Yes      | Auth code of QR code/barcode being scanned. Length: 18 | "134850717797247290"         |
| `order`    | Object | Yes      | Object of order                                        | (Refer to explanation below) |
| `storeId`  | String | Yes      | ID of the store                                        | "6170506694335521334"        |
| `memberId` | String | Yes      | Member id                                              | "1626838502220135674"        |



<br />

<strong>Order object (order):</strong>

| Parameter      | Type   | Required | Description                                         | Example              |
| -------------- | ------ | -------- | --------------------------------------------------- | -------------------- |
| `id`           | String | Yes      | Order ID (from Merchant), max: 24                   | "134850717797247290" |
| `currencyType` | String | Yes      | Currency notation (currently only support MYR)      | "MYR"                |
| `amount`       | Uint   | Yes      | Amount of order in cent (min RM 0.10 or amount: 10) | 100                  |


> Example Request

```json
curl --location --request GET "{{open_base_path}}/v3/loyalty/member/:memberId/topup-offline" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \

```

> Example Body Request

```json
{
    "authCode": "283838110784383199",
    "storeId": "10946114768247530",
    "memberId": "1626838502220135674",
    "order": {
        "id": "123asd1e1zz2ed",
        "amount": 100,
        "currencyType": "MYR"
    }
}
```

### Response Parameters


| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Transaction object                                                                                        | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Transaction object (item):</strong>

| Parameter       | Type     | Description                                                          | Example                                    |
| --------------- | -------- | -------------------------------------------------------------------- | ------------------------------------------ |
| `store`         | Object   | Store object                                                         | (Refer to explanation below)               |
| `referenceId`   | String   | Reference ID (from WeChat server)                                    | ""                                         |
| `transactionId` | String   | Transaction ID (from RM server)                                      | "152161448229438994"                       |
| `order`         | Object   | Order object                                                         | (Refer to explanation below)               |
| `payee`         | Object   | Object of userID made payment (payment sender)                       | {"userId": "o74f0wjjzv9eKRu1fccrZswVFnOQ"} |
| `currencyType`  | String   | Currency notation (currently only support `MYR`)                     | "MYR"                                      |
| `platform`      | String   | Currently only support "OPEN_API"                                    | "OPEN_API"                                 |
| `method`        | String   | [RM currently supported method](../../../../docs/payment-method.mdx) | ALL                                        |
| `type`          | String   | Currently only support "QUICKPAY"                                    | "QUICKPAY"                                 |
| `status`        | String   | Status returned from WeChat server                                   | "SUCCESS"                                  |
| `region`        | String   | Region of wallet, "MALAYSIA" or "CHINA"                              | "MALAYSIA"                                 |
| `error`         | String   | (Refer `Appendix: Error Codes`)                                      | {}                                         |
| `createdAt`     | DateTime | Creation date time of transaction                                    | "2018-03-21T06:41:22Z"                     |
| `updatedAt`     | DateTime | Last update date time of transaction                                 | "2018-03-21T06:41:22Z"                     |

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

<br />
<strong>Order object (order):</strong>

| Parameter | Type   | Description                                         | Example                        |
| --------- | ------ | --------------------------------------------------- | ------------------------------ |
| `id`      | String | Order ID (from Merchant), max: 24                   | "134850717797247290"           |
| `title`   | String | Order title, max: 32                                | "Sales"                        |
| `details` | String | Order details, max: 600                             | "1 x iPhone X; 2 x SAMSUNG S8" |
| `amount`  | Uint   | Amount of order in cent (min RM 0.10 or amount: 10) | 100                            |

> Example Response

```json
{
    "item": {
        "store": {
            "id": "10946114768247530",
            "name": "Ultropolis",
            "imageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/store.png",
            "addressLine1": "GLENMARIE LRT STATION,  SS7,  PETALING JAYA",
            "addressLine2": "GLENMARIE LRT STATION,  SS7,  PETALING JAYA",
            "postCode": "47301",
            "city": "Petaling Jaya",
            "state": "Selangor",
            "country": "Malaysia",
            "countryCode": "60",
            "phoneNumber": "1123621544",
            "geoLocation": {
                "latitude": 3.0956282,
                "longitude": 101.5900452
            },
            "status": "ACTIVE",
            "createdAt": "2020-12-18T11:17:51Z",
            "updatedAt": "2020-12-18T11:17:51Z"
        },
        "referenceId": "2021020522001472380501150230",
        "transactionId": "210205115701010435429229",
        "order": {
            "id": "123asd1e1zz2ed",
            "title": "Pay to Revenue Monster",
            "detail": "[Loyalty Balance][4118165203679668885] Top Up MYR 1.00",
            "additionalData": "Member ID: 1019317844027415630",
            "amount": 100
        },
        "terminalId": "",
        "payee": {
            "userId": "2088622925272386"
        },
        "currencyType": "MYR",
        "balanceAmount": 100,
        "voucher": null,
        "platform": "OPEN_API",
        "method": "ALIPAY",
        "transactionAt": "2021-02-05T11:57:14Z",
        "type": "QUICK_PAY",
        "status": "SUCCESS",
        "region": "CHINA",
        "createdAt": "2021-02-05T11:57:01Z",
        "updatedAt": "2021-02-05T11:57:07Z"
    },
    "code": "SUCCESS"
}
```
