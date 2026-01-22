---
id: spend-loyalty-balance
title: Spend Loyalty Balances
sidebar_label: Spend Loyalty Balances
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/balances`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/balances`

:::note
Get loyalty balance
:::

### Request Parameters

| Parameter  | Type   | Description | Example                                                |
| ---------- | ------ | ----------- | ------------------------------------------------------ | ----------------------- |
| `authCode` | String | Yes         | Auth code of QR code/barcode being scanned. Length: 18 | "134850717797247290"    |
| `storeId`  | String |             |                                                        |                         |
| `order`    | Object |             |                                                        | **refer below example** |

<br />

<strong>Order object (order):</strong>

| Parameter        | Type   | Required | Description                                         | Example               |
| ---------------- | ------ | -------- | --------------------------------------------------- | --------------------- |
| `id`             | String | Yes      | Order ID (from Merchant), max: 24                   | "134850717797247290"  |
| `title`          | String | Yes      |                                                     | "1601912947341252990" |
| `detail`         | String | Yes      |                                                     | ""                    |
| `additionalData` | String |          |                                                     | ""                    |
| `amount`         | Uint   | Yes      | Amount of order in cent (min RM 0.10 or amount: 10) | 100                   |

> Example Request

```bash
curl --location --request POST 'https://sb-open.revenuemonster.my/v3/loyalty/balances' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNbkFxWjZHek9MS0ZRIl0sImV4cCI6MTYxMTczMzcxMiwiaWF0IjoxNjA5MTQxNzEyLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UTYtRElnc3E3dEtvVyIsIm5iZiI6MTYwOTE0MTcxMiwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.vDyDrmriPMyvrzpadJx3iBLvBtX4ELsK4shnKkUPqgC9KovNzSTFVEqOe9hxAqqh9VFrEC7kBbS4FNm007CWC4P9_zbN0Ax829Q1DRS3ZZQg-wYEXywFgIqMEPKavG9KkpQ_zvNplu4kLq-gdlR0sjF37x9s7j7uZVJg8xAf8LVEOJzqfgsnt56JpcOGWsaQahQyvhAUq8_O9EYLM_PewqxIfVT6hJA83_ULGUFF9wp4xVbS1kU-u93E569F0gdiJnmcQ80CB6fz4q4u_oMrqBZiaZIJ1RYNKRXk3i8pNPhu9d3sIulPCY8PuD9eqdL31LF9npd8r54lWs05ATrg-g' \
--header 'X-Signature: sha256 XvedDW8H2gqGL5gMzTHqDy1PXX3OqRF09WuQDkeCDwuinOAsPstcPOSefUwkyHPM9WPNKKHyR5qXbKNLC7UgQyGi8Ynio03kDo0p+g3BqXaUT1tpo5D8kv42Kh2S8CW4RkX2Dkf+Yxi2XMQ8l3kzPZaRyhudaGerUZony4Npzf63p4+oTBbXE01uX/4x/WL57+zkaaVRc1KlJsLdGsBmLlPOHLana7udJffJyxXhOmyokBuJ4GoOC8JpDG9oaKCNMZ88ow9CWWB0yRPrK2KeaEDwzCm2Jh8IFKw1gS6avQAwsjychZWv5XmAXkZ8ZQrnLXJquA09QpLxPTtOeQC9SA==' \
--header 'X-Nonce-Str: XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG' \
--header 'X-Timestamp: 1599467903' \

```

> Example Body Request

```json
{
  "authCode": "loyalty_qr_authcode",
  "storeId": "store_id",
  "order": {
    "id": "some unique id",
    "title": "Loyalty Balance Payment",
    "detail": "some detail",
    "additionalData": "some additional data",
    "amount": 100
  }
}
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object |                                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

| Parameter       | Type     | Description                       | Example                 |
| --------------- | -------- | --------------------------------- | ----------------------- |
| `id`            | String   |                                   | "1647502414730379278"   |
| `store`         | Object   |                                   | **refer below example** |
| `transactionId` | String   |                                   | ""                      |
| `method`        | String   |                                   | "LOYALTY_CREDIT"        |
| `type`          | String   |                                   | "QUICK_PAY"             |
| `order`         | Object   |                                   | **refer below example** |
| `terminalId`    | String   |                                   | ""                      |
| `currencyType`  | String   |                                   | "MYR"                   |
| `transactionAt` | DateTime |                                   | "2022-01-27T04:02:46Z"  |
| `status`        | String   |                                   | "SUCCESS"               |
| `createdAt`     | DateTime | Creation date time of merchant    | "2022-01-27T04:02:46Z"  |
| `updatedAt`     | DateTime | Last update date time of merchant | "2022-01-27T04:02:46Z"  |

<br />

<strong>Store object (store):</strong>

| Parameter              | Type     | Description                                    | Example                                                      |
| ---------------------- | -------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `id`                   | String   | Store ID                                       | "1601912947341252990"                                        |
| `merchantSettlementId` | String   | Merchant Settlement ID                         | "1596124535165747709"                                        |
| `name`                 | String   | Store Name                                     | "Mountain Food - Aeon Mall Shah Alam"                        |
| `imageUrl`             | String   | Yes                                            | "https://storage.googleapis.com/rm-prod-asset/img/store.png" |
| `addressLine1`         | String   | Store Address 1                                | "B-5-30, 5th Floor, Block Bougainvillea,"                    |
| `addressLine2`         | String   | Store Address 2                                | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"                    |
| `postCode`             | String   | Postcode of store                              | "47400"                                                      |
| `city`                 | String   | City of store                                  | "Petaling Jaya"                                              |
| `state`                | String   | State of store                                 | "Selangor"                                                   |
| `country`              | String   | Country of store                               | "Malaysia"                                                   |
| `countryCode`          | String   | Country code of store contact number           | "60"                                                         |
| `phoneNumber`          | String   | Phone number of store                          | "377334080"                                                  |
| `geoLocation`          | Object   | Geo Location (latitude and longitude) of store | {"latitude": 3.1349857, "longitude": 101.6136659 }           |
| `status`               | String   | Current status of store                        | "ACTIVE"                                                     |
| `createdAt`            | DateTime | Creation date time of store                    | "2020-09-14T03:01:20Z"                                       |
| `updatedAt`            | DateTime | Last update date time of store                 | "2020-09-14T03:01:20Z"                                       |

<br />

<strong>Order object (order):</strong>

| Parameter | Type   | Required | Description                                         | Example              |
| --------- | ------ | -------- | --------------------------------------------------- | -------------------- |
| `id`      | String | Yes      | Order ID (from Merchant), max: 24                   | "134850717797247290" |
| `title`   | String | Yes      |                                                     | ""                   |
| `detail`  | String | Yes      |                                                     | ""                   |
| `amount`  | Uint   | Yes      | Amount of order in cent (min RM 0.10 or amount: 10) | 100                  |

> Example Response

```json
{
  "item": {
    "id": "1643256166719420340",
    "store": {
      "id": "1601912947341252990",
      "merchantSettlementId": "1596124535165747709",
      "name": "Mountain Food - Aeon Mall Shah Alam",
      "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
      "addressLine1": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
      "addressLine2": "BUBBLEBEE SHAH ALAM,  SEKSYEN 13,  SHAH ALAM",
      "postCode": "40100",
      "city": "Shah Alam",
      "state": "Selangor",
      "country": "Malaysia",
      "countryCode": "60",
      "phoneNumber": "1123621544",
      "geoLocation": {
        "latitude": 3.0753809,
        "longitude": 101.5502306
      },
      "status": "ACTIVE",
      "createdAt": "2021-03-24T07:58:02Z",
      "updatedAt": "2021-11-12T02:56:02Z"
    },
    "transactionId": "",
    "method": "LOYALTY_CREDIT",
    "type": "QUICK_PAY",
    "order": {
      "id": "220127120247232716",
      "title": "In store payment",
      "detail": "[Merchant app] Pay to Mountain Food - Aeon Mall Shah Alam with loyalty balance",
      "amount": 100
    },
    "terminalId": "",
    "currencyType": "MYR",
    "transactionAt": "2022-01-27T04:02:46Z",
    "status": "SUCCESS",
    "createdAt": "2022-01-27T04:02:46Z",
    "updatedAt": "2022-01-27T04:02:46Z"
  },
  "code": "SUCCESS"
}
```
